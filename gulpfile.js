(function(){
  'use strict';

  var gulp = require('gulp');
  var gutil = require('gulp-util');
  var webpack = require('webpack');
  var gulpWebpack = require('gulp-webpack');  
  var WebpackDevServer = require('webpack-dev-server');
  var karma = require('gulp-karma');
  var webpackConfig = require('./webpack-config');
  var watch = require('gulp-watch');
  
  var webpackDevServerPort = 6000;

  var testFiles = [
    './test/client/hello.js',
    './test/client/**/*_spec.js'
  ];

  gulp.task('test', function() {
    return gulp.src(testFiles)
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
      }))
      .on('error', function(err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
      });
  });

  gulp.task('karma', function() {
    gulp.src(testFiles)
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
      }));
  });
  
  gulp.task('build', function(){
    gulp.src(webpackConfig.entry.app)
      .pipe(gulpWebpack(webpackConfig))
      .pipe(gulp.dest('./public/js/prod'));
  });

  gulp.task('watch', function() {
    gulp.watch(['./public/js/**/*.js', "!./public/js/prod/*.js"], ['build']);
  });
})();
