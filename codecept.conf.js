const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './scenarios/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://saucedemo.com',
      show: true,
      browser: 'chromium',
      restart: false,
      timeout: 10000,
      fullPageScreenshots: true,
      uniqueScreenshotNames: false,
      waitForAction: 500,
      waitForNavigation: 'networkidle',
      getPageTimeout: 30000,
      waitForTimeout: 30000,
      windowSize: '1920x1080'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'ta-ui-course',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }

}