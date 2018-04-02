const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  (async function toushu(){
    await page.goto('http://www.yongqischool.com/ms-book.html')
    await page.waitFor(2000);
    await page.evaluate(() => {
      return document.querySelector('.msgform textarea').value="最近，我在上海永琪美容美发一家益江路直营店理发，理发期间，里面员工说办理会员只要100，结果在付款时直接扣款1000，事后我感觉被骗，要求退卡，结果门店客服各种刁难，比如明知客服不在工作时间还叫我一直打电话，退卡时要扣除30%的手续费等等，所以在此我希望大伙能以我为戒，不要去这种欺骗客户的理发店去理发或办会员卡，这种欺骗行径真让我心寒";
    });
    await page.evaluate(() => {
      return document.querySelector('input[name="subject"]').value="投诉";
    });
    await page.evaluate(() => {
      return document.querySelector('input[name="email"]').value="12345678@qq.com";
    });
    await page.evaluate(() => {
      return document.querySelector('input[name="mobile"]').value="12345678910";
    });
    await page.click('input[type="image"]');
    await page.waitFor(2000);
    toushu();
  })()
})();