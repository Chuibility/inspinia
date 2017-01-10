'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {
  var lessOptions = {
    options: [
      'bower_components',
      path.join(conf.paths.src, '/app')
    ]
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/*.less'),
    path.join('!' + conf.paths.src, '/app/index.less')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };


  var styles = gulp.src([
    path.join(conf.paths.src, '/app/index.less')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.less(lessOptions)).on('error', conf.errorHandler('Less'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write());

  if(conf.environment === 'release') {
    styles.pipe($.replace('../../bower_components/fontawesome/fonts/', '../fonts/'))
      .pipe($.replace('../../bower_components/bootstrap/fonts/', '../fonts/'));
  }

  return styles.pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};


