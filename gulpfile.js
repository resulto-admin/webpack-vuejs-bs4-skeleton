/* jshint node:true */
'use strict';

var process = require('process');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var SASS_PATH = './*/static/*/style/*.scss';

var SASS_DEPENDANCIES = [
    './node_modules/bootstrap/scss/'
];

var isProduction = process.env.NODE_ENV == 'production';

gulp.task('default', function() {
    console.log('Hello World');
});

gulp.task('sass', function () {
    var options = {includePaths: SASS_DEPENDANCIES};

    var task = gulp.src(SASS_PATH);

    if (isProduction) {
        options.outputStyle = 'compressed';
    } else {
        task = task.pipe(sourcemaps.init());
    }

    task = task.pipe(sass(options).on('error', sass.logError));

    if (!isProduction) {
        task = task.pipe(sourcemaps.write());
    }

    return task.pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
      gulp.watch(SASS_PATH, ['sass']);

});
