// 
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const client = require('twilio')('AC490d577ec208df430f5470231afaa0a9', '965340f6c9d09f0e074cad63431b8cd5');

const xml = require('xml')
app.post('/', (req, res) => {

    client.messages
    .create({
       body: 'Change to job listings',
       from: '+17432285091',
       to: '+13054406706'
     })
    .then(message => console.log(message));
  res.send();
})



app.listen(3010, () => {

  console.log('Server listening on port 3000');

});

/* 
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.wyzant.com/login");
  let selectors = await page.$$("#Username");
  await selectors[1].type("cory.nickerson");
  selectors = await page.$$("#Password");
  await selectors[3].type("LisaSanders#42");
  let selector = await page.$x(
    "/html/body/div[1]/div[3]/div[1]/div/div/div/div/div[8]/form/button"
  );
  await selector[0].click();
  await page.waitForNavigation();
  selector = await page.$x(
    "/html/body/div[1]/div/div[2]/main/section[1]/div[2]/a/div/div/h3"
  );
  await selector[0].click();
  await page.waitForNavigation();

  selector = await page.$x(
    "/html/body/div[1]/form/div[2]/div[1]/div[1]/h2/span"
  );
  let text = await page.evaluate(
    (selector) => selector.textContent,
    selector[0]
  );
  text = Number(text);
  for (let i = 0; i < 10; i + 0) {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    selector = await page.$x(
      "/html/body/div[1]/form/div[2]/div[1]/div[1]/h2/span"
    );
    let newText = await page.evaluate((selector) => selector.textContent, selector[0]);
    newText = Number(newText);
    if (newText > text) {
      text = newText;
      Axios.post("http://localhost:3000", { text });
      console.log('change')
    }
    await new Promise((r) => setTimeout(r, 10000));
    console.log('no change')

  }
})(); */