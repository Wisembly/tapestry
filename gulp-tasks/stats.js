var gulp = require('gulp');
var stylestats = require('gulp-stylestats');

module.exports = function () {
  return gulp.src('./website/public/tapestry.css')
    .pipe(stylestats());
};
