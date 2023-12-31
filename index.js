const os = require('os');
const path = require('path');
const util = require('util');
const mkdtempAsync = util.promisify(require('fs').mkdtemp);
const CHROME_PROFILE_PATH = path.join(os.tmpdir(), 'puppeteer_dev_profile-');

async function createTemporaryUserDataDir() {
  const temporaryUserDataDir = await mkdtempAsync(CHROME_PROFILE_PATH);
  return temporaryUserDataDir;
}

// Usage:
createTemporaryUserDataDir()
  .then((userDataDir) => {
    // Now you can use 'userDataDir' in your code.
  })
  .catch((error) => {
    console.error('Error creating temporary user data directory:', error);
  });


// Use 'userDataDir' in your code as needed.





// const doAllTask = async ()=>{
  const TelegramBot = require('node-telegram-bot-api');

  // Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
  const token = '6747901220:AAHrEXxkNRLOIyZDGSRFHTQfr0rBcwjCNb4';
  
  
const puppeteer = require('puppeteer');
require("dotenv").config();

// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Tesseract = require('tesseract.js');

let uhrsCookies = require('./uhrs.json');
let gptCookies = require('./gpt.json');


// const cheerio = require('cheerio');
// const axios = require('axios');


const express = require('express');
const app = express(); 
const port =  process.env.PORT || 3000 ; 
app.get('/', (req, res) => res.send('Welcome To Code Handbook!'));
app.listen(port, () => console.log(`App listening on port ${port}!`));



// puppeteer.use(StealthPlugin());

// const { executablePath } = require('puppeteer');





const url = 'https://whatismyipaddress.com';
const urlChat = "https://chat.openai.com/c/a9a9ba83-78a3-4113-ae8c-9a703680a476";


// const getReady= async()=>{
//   }







const main = async (passValue, duration, cookies) => {
  try{


  // Launch Puppeteer with specific options

// // // checking if headless is true or false
//   // Get the browser's command line arguments
//   const browserArgs = browser.process().spawnargs;

//   // Check if the '--headless' argument is present
//   const isHeadless = browserArgs.includes('--headless');

//   if (isHeadless) {
//     console.log('Headless mode is enabled.');
//         // // other way to setview
// await page.evaluate((width, height) => {
//   window.innerWidth = width;
//   window.innerHeight = height; 
// }, 482, 614);
//   } else {
//     console.log('Headless mode is disabled.');
//     // // other way to setview
// await page.evaluate((width, height) => {
//   window.innerWidth = width;
//   window.innerHeight = height;
// }, 482, 614);

//   }

//   // Set a custom user agent
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
// const chromiumPath = await getChromiumExecutablePath();

const browser = await puppeteer.launch({ headless: true,
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
        
        ], 
        executablePath:
process.env.NODE_ENV === "production"
? process.env.PUPPETEER_EXECUTABLE_PATH
: puppeteer.executablePath()
      });

const page = await browser.newPage();
// const pageChat = await browser.newPage();
await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36");
// await pageChat.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36");
await page.setViewport({ width: 1366, height: 768 });



  // Set the cookies in Puppeteer's page
  try{
    await page.setCookie(...uhrsCookies);
  }catch{
    await page.setCookie(...cookies);

  }
  console.log("trying to loaded !!!!!! waittttt   ");
  await page.goto(url).catch((error) => console.error(`Error navigating to URL: ${error}`));
  // await pageChat.goto(urlChat).catch((error) => console.error(`Error navigating to URL: ${error}`));

  // await page.goto(url);
  // await pageChat.goto(urlChat);

  console.log("sprout URL loaded !!!!!! successsssss   ");


  await page.waitForTimeout(5000);


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let bodyData = await page.evaluate(()=>{
    return document.body.innerText;
  })
console.log(bodyData);
return bodyData;

//   ///////////// *************************////////////

await page.evaluate(()=>{
  document.querySelector("#fullname").value="Jemal Muhammed";
  document.querySelector("#email").value="redietmasresha5@gmail.com";
  document.querySelector("#password").value="rediet@masresha1";
  document.querySelector("#confirmpassword").value="rediet@masresha1";
  document.querySelector("#nickname").value="redietmasresha";

  // // Select the span element by its ID or another suitable selector
  // const countrySpan = document.getElementById("select2-countrycode-container");
  // // Check if the element is found before changing its content
  // if (countrySpan) {
  //   // Change the text content to a new country name, for example, "New Country"
  //   countrySpan.textContent = "Singapore";
  // }
  document.querySelector("#profileTypeWorker").click();
  document.querySelector("#tos").click();
  document.querySelector("#opt-in").click();


  






  // // i can use optionally the following two lines but not wanted to do so :(
  // document.querySelector("button[type='submit']").click();
  // bodyText = document.querySelector("body").innerText;



})

  // await page.waitForTimeout(5000);

const countrySelector = 'select#countrycode'; // Selector for the dropdown element

// Wait for the dropdown to appear
await page.waitForSelector(countrySelector);

// Select Singapore by value
const countryValue = 'sg'; // Value of Singapore in the dropdown // singapore
// const countryValue = 'nl'; // Value of Singapore in the dropdown // netherlands

await page.select(countrySelector, countryValue);
// await page.waitForTimeout(1000);




// // i can use this way :) to get elements on 'page' using #CSS selector and manipulate them without page.evaluate but "page.$"
// let submitBtn = await page.$("button[type='submit']");
await page.evaluate(()=>{
    document.querySelector("button[type='submit']").click();

})

// await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36');

// await submitBtn.click();

// Wait for navigation to the new page to complete because of click triggered to load or fetch new page
await page.waitForNavigation({ waitUntil: 'networkidle0' });

// Now that the new page has loaded, get the body text       *********** tip here! use page.evaluate only if i have "document.sth" otherwise if i only need to select an element in (any) page use "page.&" or pageChat.&" which follows simple parenthesis with css selector like jQuery
const bodyText = await page.evaluate(() => {
  return document.querySelector("body").innerText;
});

console.log(bodyText);
return (bodyText);






///////////// *************************////////////









}catch(msg){
  console.log(msg);
  return msg;

} // the big try-catch closes here

} // main func closes here.


// // call the main function with or without parameter eg. main(once/forever, [{},{},{}]) or ust main() to call once with uploaded cookie or main([{},{}]) to call once with custom cookies
// main({duration:"forever", cookies:""});




















  //setting the keyboard for inline buttons

const buttons = [
  [{ text: 'start it', callback_data: 'start' }],
  [{ text: 'Show me', callback_data: 'show' }],
  [{ text: 'Need help?', callback_data: 'help' }],
];



const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text.includes("},") ){
    uhrsCookies = text;
    bot.sendMessage(chatId, 'the uhrsCookies:'+ uhrsCookies);


    bot.sendMessage(chatId, 'Success! the provided cookies are added you can now continue.');
  }



//////////////////// send the buttons
  const keyboard = {
    inline_keyboard: buttons,
  };

  const replyMarkup = {
    reply_markup: JSON.stringify(keyboard),
  };

  bot.sendMessage(chatId, 'Choose a button:', replyMarkup);
////////////////////
    
});
// handle the button clicks
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const buttonData = query.data;

  if (buttonData === 'start')  {
    bot.sendMessage(chatId, 'Processing...')
    
    // await getReady();
    const result = await main({duration:"forever", cookies:""}); // Wait for the result to be processed
 

    bot.sendMessage(chatId,  result) // Send the result

  }else if(buttonData === 'show'){
    bot.sendMessage(chatId, 'generating the image...')

    // const result = await main(); // Wait for the result to be processed
    try{
    bot.sendPhoto(chatId, 'screenshot.png', { caption: 'Here is your screenshot!' })
    .then(() => {
      // Answer the callback query to acknowledge the button press
      bot.answerCallbackQuery(query.id, 'Result delivered')
    });;

    }catch(err){
      console.log(err.message);
      bot.sendMessage(chatId, 'Cannot send...')

    }

  }else if(buttonData === 'help'){
    bot.sendMessage(chatId, `This is an automation tool for Toloka TextAd works. To login with your account and start automating your account you must have to upload your browser's cookies. you can find your browser cookie using a chrome extentions eg. "EXP cookies tool" after exporting your cookies data send the json text that will be downloaded b the time you export from the extention. Finally, after you are successfully logged in use the buttons and commands for your automation eg. use "start it" to start your automation`)
    .then(() => {
      // Answer the callback query to acknowledge the button press
      bot.answerCallbackQuery(query.id, 'Result delivered')
    });
  }    
});


// async function tg() {
//   return await main({ duration: "forever", cookies: "" });
// }

console.log('Eco Telegram Bot is running.');
