const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.dianping.com/login')
  await page.waitFor(3000);
  await page.evaluate(() => {
    var _iframe = document.getElementsByTagName('iframe')[0].contentWindow;
    _iframe.document.querySelector('.bottom-password-login').click();
    _iframe.document.querySelector('#tab-account').click();
    _iframe.document.querySelector('#account-textbox').value="17317147752";
    _iframe.document.querySelector('#password-textbox').value="zj010379";
    _iframe.document.querySelector('#login-button-account').click();
  });
  await page.waitFor(2000);
  await page.goto('https://www.dianping.com/shop/2531170')
  await page.waitFor(2000);
  await page.click('.write.left-action');
  await page.waitFor(2000);
  await page.click('.one-star');
  await page.click('#J_review-s1 .square-0');
  await page.click('#J_review-s2 .square-0');
  await page.click('#J_review-s3 .square-0');
  await page.evaluate(() => {
    document.querySelector('#J_review-body').value="最近，我在上海永琪美容美发一家益江路直营店理发，理发期间，里面员工说办理会员只要100，结果在付款时直接扣款1000，事后我感觉被骗，要求退卡，结果门店客服各种刁难，比如明知客服不在工作时间还叫我一直打电话，退卡时要扣除30%的手续费等等，所以在此我希望大伙能以我为戒，不要去这种欺骗客户的理发店去理发或办会员卡，这种欺骗行径真让我心寒";
    document.querySelector('input[value="提交点评"]').click();
  });
  // (async function toushu(){
        
  // })()
})();