import { When, Then, Given } from "cucumber";
import { browser, element, by, Key} from "protractor";


import { expect } from 'chai';


import 'chai/register-should';

/* Given the search outcome is displayed
    When I clear the search form
    And I press "Search" button
    Then I should get empty outcome */

Given ('the search outcome is displayed', { timeout: 60 * 1000 }, async function () {

    await element(by.id('people')).click();
    await browser.sleep(500);
    await element(by.id("query")).sendKeys('Darth');
    await browser.sleep(400);
        
});

When ('I clear the search form', { timeout: 60 * 1000 }, async function() {
    await element(by.id("query")).clear();
    await browser.sleep(400);

});

Then('I should get empty outcome ', { timeout: 60 * 1000 }, async function (){  

});

When ('I search character with Luke Skywalker value and I press enter button', { timeout: 6 * 1000 }, async function () {
    await element(by.id("query")).sendKeys('Luke Skywalker');
    await browser.sleep(400);
    await browser.actions().sendKeys(Key.ENTER).perform();
    await browser.sleep(400);
})