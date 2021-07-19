// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  debug: false,
  allScriptsTimeout: 20000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--no-sandbox']
    }
  },
  restartBrowserBetweenTests: true,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    format: [
      'json:test-reports/cucumber-test-results.json'
    ]
  },
  plugins: [
    {
      package: "protractor-css-booster"
    }
  ],
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  }
  
};

