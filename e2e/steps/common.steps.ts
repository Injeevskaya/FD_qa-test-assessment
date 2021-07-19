import { Given, When } from "cucumber";
import { browser, element, by } from "protractor";

import 'chai/register-should';


Given('I open the search form on {string}', { timeout: 60 * 1000 }, async function (url)  {
    await browser.get(url).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(500);
    })
});

Given ('I choose {string} radio-button', { timeout: 60 * 1000 }, async function (button_id) {
    await element(by.id(button_id)).click();
    await browser.sleep(500);
    
});

When('I press {string} button', { timeout: 60 * 1000 }, async function (caption){
    await element(by.buttonText(caption)).click(); 
    await browser.sleep(400);
});
