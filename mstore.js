const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
(async () => {
  const browser = await puppeteer.launch({headless:false,devtools: true});
  const page = await browser.newPage();
  let ArrowCount = 0;
  await page.emulate(iPhone);
  // page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
  page.on('console', msg => console.log(msg.text()));
  // page.on('requestfailed',error => console.log(error.url()))
  // page.on('error',error => console.log(error))
  await page.goto('http://mstore.ppdai.com/');
  await page.waitFor(1000);

  await page.screenshot({path: './screenshot/首页.png'});

  await page.setCookie({"name":"token","value":"d8c2633b-d430-4558-824e-a22c3226790d"});
  await page.waitFor(1000);
  await page.evaluate(() => {
    document.querySelector('.product_name').value='';
  });
  await page.type('.product_name','iphone',{delay:100})
  await page.waitFor(2000);
  await page.click('.toSearchBtn')

  //搜索列表页
  await page.waitFor(3000);
  await page.screenshot({path: './screenshot/搜索列表页.png'});
  const productLink = await page.evaluate(() => {
    const product = document.querySelectorAll('.list_item')[2].children[0];
    product.click();
  });

  //进到产品详情页
  await page.waitFor(4000);

  await page.screenshot({path: './screenshot/产品详情页.png'});

  let proArrowDown = setInterval(()=>{
    ArrowCount++;
    page.keyboard.press('ArrowDown');
    if(ArrowCount>10){
      clearInterval(proArrowDown)
      ArrowCount = 0;
    }
  },50)
  await page.waitFor(2000);
  await page.click('.comfire_btn');
  await page.waitFor(2000);

  await page.screenshot({path: './screenshot/产品规格.png'});

  await page.evaluate(() => {
    document.querySelectorAll('.btn')[1].click();
  });
  await page.waitFor(1000);
  await page.click('.comfire_btn');
  await page.waitFor(2000);

  //进入订单确认页
  await page.waitFor(3000);

  await page.screenshot({path: './screenshot/订单确认页.png'});

  await page.click('.useCardLink');
  await page.waitFor(3000);

  await page.screenshot({path: './screenshot/订单优惠券选择.png'});

  const userCard = await page.evaluate(() => {
    const userCard = document.querySelector('#choose_card').children[3].children[0];
    userCard.click();
  });
  await page.waitFor(2000)
  const submitOrder = await page.evaluate(() => {
    const submitOrder = document.querySelector('#app').children[6].children[0];
    submitOrder.click();
  });

  //进入支付确认页
  await page.waitFor(4000);
  await page.screenshot({path: './screenshot/支付确认页.png'});

  //回到首页
  await page.goto('http://mstore.ppdai.com/');
  await page.waitFor(2000);
  
  let ArrowDown = setInterval(()=>{
    ArrowCount++;
    page.keyboard.press('ArrowDown');
    if(ArrowCount>10){
      clearInterval(ArrowDown)
      ArrowCount = 0;
    }
  },50)
  await page.waitFor(2000);
  let ArrowUp = setInterval(()=>{
    ArrowCount++;
    page.keyboard.press('ArrowUp');
    if(ArrowCount>10){
      clearInterval(ArrowUp)
      ArrowCount = 0;
    }
  },50);
  await page.waitFor(2000);
  await page.click('.touser');
  await page.waitFor(3000);

  await page.screenshot({path: './screenshot/用户中心.png'});

  await page.click('.myOrderLink')
  await page.waitFor(4000)

  await page.screenshot({path: './screenshot/用户订单列表.png'});

  await page.click('.back')
  // await page.screenshot({path: 'example.png'});
  // await page.pdf({path: 'example.pdf', format: 'A4'});
  // await browser.close();
})();
