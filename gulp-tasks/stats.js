var gulp = require('gulp');
var rename = require('gulp-rename');
var stylestats = require('gulp-stylestats');

module.exports = function () {
  return gulp.src('dist/css/tapestry.css')
    .pipe(stylestats({
      type: 'json',
      outfile: true
    }))
    .pipe(rename(+new Date() + '-tapestry-stats.json'))
    .pipe(gulp.dest('dist/stats'));
};
