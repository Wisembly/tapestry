var gulp   = require('gulp');
var sass   = require('gulp-sass');
var base64 = require('gulp-base64');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');

module.exports = function () {
  return gulp.src('./src/scss/**/build.scss')
		.pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(base64({
        extensions: ['svg'],
      }))
    .pipe(prefix({
      browsers: ['Safari 7', 'last 2 versions']
    }))
    .pipe(rename('tapestry.css'))
    .pipe(gulp.dest('dist/css'));
};
