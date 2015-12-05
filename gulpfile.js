var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var project = {
    js : ['js/app/**/*.js']
};

gulp.task('lint', function() {
    'use strict';
    return gulp.src(project.js)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
