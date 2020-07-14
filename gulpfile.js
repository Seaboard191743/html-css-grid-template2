'use strict'

// const gulp = require('gulp');
// const sass = require('gulp-sass');
// sass.compiler = require('node-sass');
// const csso = require('gulp-csso');
// const autoprefixer = require('gulp-autoprefixer');
// const notify = require("gulp-notify");
// const sourcemaps = require('gulp-sourcemaps');
// const browserSync = require('browser-sync').create();

global.$ = {
    gulp: require('gulp'),
    sass: require('gulp-sass'),
    sassCompiler: require('node-sass'),
    csso: require('gulp-csso'),
    autoprefixer: require('gulp-autoprefixer'),
    notify: require("gulp-notify"),
    sourcemaps: require('gulp-sourcemaps'),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function(item) {
    require(item)();
})

$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'assets', 'sass'), $.gulp.parallel('watch', 'server')));