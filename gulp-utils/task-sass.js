var gulp = require('gulp');
var linter  = require('gulp-scss-lint');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var errorHandler = require('./fn-errors-handler');

module.exports = function () {
  return gulp.src('./src/**/*.scss')
		.pipe(linter({
      'config': './scss-lint.yml'
    }))
		.on('error', errorHandler)
		.pipe(sourcemaps.init())
    .pipe(sass())
		.on('error', errorHandler)
		.pipe(sourcemaps.write())
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist'));
};
