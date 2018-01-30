const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://www.12306.cn/mormhweb/');
  const targetLink = await page.evaluate(() => {
    return document.querySelector('.k2').getAttribute('href');
  });
  console.log(targetLink)
  await page.goto(targetLink);
  await page.click('#fromStationText');
  await page.waitFor(1000);
  await page.click('.ac_even[title="上海"]');
  await page.click('#toStationText');
  await page.waitFor(1000);
  await page.click('.ac_even[title="南昌"]');
  await page.click('#a_search_ticket');
  await page.goto('https://kyfw.12306.cn/otn/leftTicket/init');
  await page.click('#query_ticket');
  await page.waitFor(1000);
  await page.click('.btn72');
  await page.waitFor(1000);
  await page.click('.btn72');
  await page.waitFor(3000);
  await page.type('#username','zoujie',{delay:100})
  await page.type('#password','zoujie',{delay:100})
  // await page.screenshot({path: 'example.png'});
  // await page.pdf({path: 'example.pdf', format: 'A4'});
  // await browser.close();
})();