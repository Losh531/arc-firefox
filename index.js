const delay = require('delay');
const puppeteer = require('puppeteer')

(async function example() {

  try {
    for (i == 0; i < 100; i++){
    await delay(Math.floor((Math.random() * 4000) + 2000));
    const browser = await puppeteer.launch({product: 'firefox', args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://arcio-server.losh531.repl.co');
    await console.log("At Website " + i)
    }
  } finally {
    await console.log("ending")
  }
})();

