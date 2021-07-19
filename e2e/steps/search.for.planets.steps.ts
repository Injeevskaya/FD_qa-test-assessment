
import { When, Then } from "cucumber";
import { browser, element, by } from "protractor";


import { expect } from 'chai';
import 'chai/register-should';



When('I search planet with {string} value', { timeout: 60 * 1000 }, async function (character) {
    await element(by.id("query")).sendKeys(character);
    await browser.sleep(500);
});


Then('I should get the outcome with Population {string}, Climate {string} and  Gravity {string}', { timeout: 60 * 1000 }, 
        async function (population, climate, gravity ){

        await browser.sleep(500);
        
        await expect((await element(by.cssContainingText('.col-sm-2', 'Population:')).element(by.followingSibling('div')).getText()).trim()).to.equal(population);
        await expect((await element(by.cssContainingText('.col-sm-2', 'Climate:')).element(by.followingSibling('div')).getText()).trim()).to.equal(climate);
        await expect((await element(by.cssContainingText('.col-sm-2', 'Gravity:')).element(by.followingSibling('div')).getText()).trim()).to.equal(gravity);
});

Then('I should find no planet and get {string} message', { timeout: 60 * 1000 }, async function (msg) {
    await browser.sleep(400);
    await expect(await (element(by.xpath(`//div[text()="${msg}"]`)).isDisplayed())).to.be.true;   
});