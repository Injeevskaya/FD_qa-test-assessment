

import { When, Then } from "cucumber";
import { browser, element, by } from "protractor";


import { expect } from 'chai';
import 'chai/register-should';



When('I search character with {string} value', { timeout: 60 * 1000 }, async function (character) {
    await element(by.id("query")).sendKeys(character);
    await browser.sleep(400);
});


Then('I should get the outcome with Gender {string}, Birth year {string}, Eye color {string} and Skin color {string}', 
    { timeout: 60 * 100 }, async function (gender, birth_year, eye_color, skin_color ){
        
        await browser.sleep(400);

        await expect((await element(by.cssContainingText('.col-sm-2', 'Gender:')).element(by.followingSibling('div')).getText()).trim()).to.equal(gender);
        await expect((await element(by.cssContainingText('.col-sm-2', 'Birth year:')).element(by.followingSibling('div')).getText()).trim()).to.equal(birth_year);
        await expect((await element(by.cssContainingText('.col-sm-2', 'Eye color:')).element(by.followingSibling('div')).getText()).trim()).to.equal(eye_color);
        await expect((await element(by.cssContainingText('.col-sm-2', 'Skin color:')).element(by.followingSibling('div')).getText()).trim()).to.equal(skin_color);
        
});

Then('I should get the outcome with more then one character records', 
    { timeout: 60 * 1000 }, async function (){
        
        await browser.sleep(400);

        await element.all(by.css('h6.card-subtitle.mb-2.text-muted')).getText().then( function(items) {
            expect (items).all.to.match(/Darth .*/)
        });

        await element.all(by.cssContainingText('.col-sm-2', 'Gender:')).then( function(items) {
            expect(items.length).to.be.at.least(2)
        } );

        await element.all(by.cssContainingText('.col-sm-2', 'Birth year:')).then( function(items) {
            expect(items.length).to.be.at.least(2)
        } );

        await element.all(by.cssContainingText('.col-sm-2', 'Eye color:')).then( function(items) {
            expect(items.length).to.be.at.least(2)
        } );
        
        await element.all(by.cssContainingText('.col-sm-2', 'Skin color:')).then( function(items) {
            expect(items.length).to.be.at.least(2)
        } );

});


Then('I should find no character and get {string} message', { timeout: 60 * 1000 }, async function (msg) {
    await browser.sleep(400);
    await expect(await (element(by.xpath(`//div[text()="${msg}"]`)).isDisplayed())).to.be.true;   
});



