var gulp = require('gulp');
var stylestats = require('gulp-stylestats');

module.exports = function () {
  return gulp.src('./dist/*.css')
    .pipe(stylestats());
};
