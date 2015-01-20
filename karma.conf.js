module.exports = function(config) {
  'use strict';
  
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './test/client/hello.js',
      './test/client/**/*_spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
