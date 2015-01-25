(function(){
  'use strict';

  var gulp = require('gulp');
  var gulpWebpack = require('gulp-webpack');
  var gulpConnect = require('gulp-connect');  
  var karma = require('gulp-karma');
  var webpackConfig = require('./webpack-config');
  var gulpMocha = require('gulp-mocha');
  var gulpMerger = require ('lcov-result-merger');
  var gulpIstanbul = require('gulp-istanbul');
  var gulpCoveralls = require('gulp-coveralls');

  var testFiles = [
    './test/client/hello.js',
    './test/client/**/*_spec.js'
  ];

  gulp.task('test:client', function() {
    return gulp.src(testFiles)
      .pipe(karma({configFile: 'karma.conf.js', action: 'run'}))
      .on('error', function(err) { throw err; });
  });

  gulp.task('test:server', function() {
    return gulp.src('./test/server/**/*.js', {read: false})
      .pipe(gulpMocha({reporter: 'spec'}));
  });

  gulp.task('test:server:coverage', function(){
    gulp.src(['lib/**/*.js'])
      .pipe(gulpIstanbul())
      .pipe(gulpIstanbul.hookRequire())
      .on('finish', function(){
        gulp.src(['test/server/**/*.js'])
          .pipe(gulpMocha({reporter: 'spec'}))
          .pipe(gulpIstanbul.writeReports('coverage'));
      });
  });
  
  gulp.task('karma', function() {
    gulp.src(testFiles)
      .pipe(karma({configFile: 'karma.conf.js', action: 'watch'}));
  });
  
  gulp.task('build', function(){
    gulp.src(webpackConfig.entry.app)
      .pipe(gulpWebpack(webpackConfig))
      .pipe(gulp.dest('./public/js/prod'));
  });

  gulp.task('serve', function(){
    gulpConnect.server({
      root: './public',
      port: 8000,
      livereload: true
    });
  });

  gulp.task('cover', ['test:server:coverage', 'test:client'], function() {
    return gulp.src('./coverage/lcov*.info')
      .pipe(gulpMerger())
      .pipe(gulp.dest('./coverage'));
  });

  gulp.task('coveralls', ['cover'], function(){
    return gulp.src('coverage/lcov.info')
      .pipe(gulpCoveralls());
  });
  
  gulp.task('reload', function() {
    gulp.src(['./public/js/**/*.js', '!./public/js/prod/*.js'])
      .pipe(gulpConnect.reload());
  });
  
  gulp.task('watch', function() {
    gulp.watch(['./public/**/*.js', '!./public/js/prod/*.js'], ['build']);
    gulp.watch(['./lib/**/*.js', './test/server/**/*.js'], ['test:server']);
    gulp.src(testFiles)
      .pipe(karma({configFile: 'karma.conf.js', action: 'watch'}));
    gulp.watch(['./public/js/**/*.js', '!./public/js/prod/*.js'], ['reload']);
  });

  gulp.task('default', ['serve', 'watch']);
})();

