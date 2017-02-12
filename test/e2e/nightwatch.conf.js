require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.gecko.driver' : 'test/e2e/geckodriver'
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    'phantomjs': {
      'desiredCapabilities': {
        'browserName': 'phantomjs',
        'javascriptEnabled': true,
        'databaseEnabled': true,
        'locationContextEnabled': true,
        'applicationCacheEnabled': true,
        'browserConnectionEnabled': true,
        'webStorageEnabled': true,
        'acceptSslCerts': true,
        'rotatable': true,
        'nativeEvents': true,
        'phantomjs.binary.path': 'node_modules/phantomjs-prebuilt/bin/phantomjs',
        'phantomjs.cli.args': ['--ignore-ssl-errors=true'],
        'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
        'phantomjs.page.settings.loadImages': false
      }
    }
  }
}
