module.exports = function(config) {
  'use strict';
  
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      {pattern: './public/js/**/*.js', watched: true, included: true, served: true},
      {pattern: './test/client/**/*_spec.js', watched: true, included: true, served: true},
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
