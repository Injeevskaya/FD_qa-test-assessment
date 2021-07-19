# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: your name and optionally contact information

Tatiana Inzheevskaya


## Remarks 

* We may have made a little mistake in the configuration on Cucumber, we'll leave it to you to fix it

Was added to the protractor.conf.js
1. allScriptsTimeout: 10000,
2. specs: [ './e2e/features/*.feature'],
3. restartBrowserBetweenTests: true,
4. SELENIUM_PROMISE_MANAGER: false,
5.   capabilities: {
    'chromeOptions': {
      args: ['--no-sandbox']
    }
  }
6. This plugin was installed 
plugins: [
    {
      package: "protractor-css-booster"
    }
  ]

7. The row allScriptsTimeout:  was 2 times in config () Dublicate was removed, value was set to allScriptsTimeout: 20000,
Test-reports folder was added

## Instalation
cd qa-test-assessment_Tatiana
npm install

## Found issues

Searching with empty value.
Expected behaviour: Should return empty result
Actual behaviour: Previous search result remains displayed

