// Karma configuration
// Generated on Sat Aug 06 2016 14:53:01 GMT+0300 (Финляндия (лето))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter


    // list of files / patterns to load in the browser
    files: [
      'js/**/*.js',
      'tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    frameworks: ['jasmine'],                  // Required for the test runner

    reporters: ['progress', 'htmlDetailed'],  // Add 'htmlDetailed' as a reporter

    browsers: ['Firefox', 'PhantomJS'],        // Define your browser(s)

    plugins: [
      'karma-jasmine',                      // Required plugin
      'karma-firefox-launcher',              // Launches Chrome
      'karma-phantomjs-launcher',           // Launches PhantomJS
      'karma-html-detailed-reporter'        // Adds plugin
    ],

    // Optionally, configure the reporter
    htmlDetailed: {
      splitResults: true,
      dir: './tests/report'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
