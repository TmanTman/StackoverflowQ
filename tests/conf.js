exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  specs: ['e2e/test.spec.js'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
            binary: '/Applications/Google\ Chrome\ Stable.app/Contents/MacOS/Google\ Chrome'
        }
  }

};
