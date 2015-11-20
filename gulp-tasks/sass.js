var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');

module.exports = function () {
  return gulp.src('./src/scss/**/build.scss')
		.pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(rename('tapestry.css'))
    .pipe(gulp.dest('dist/css'));
};
