var gulp = require('gulp');
var rename = require('gulp-rename');
var stylestats = require('gulp-stylestats');

module.exports = function () {
  var release = process.argv[3].split('--')[1];

  return gulp.src('dist/css/tapestry.css')
    .pipe(stylestats({
      type: 'json',
      outfile: true
    }))
    .pipe(rename(release + '.json'))
    .pipe(gulp.dest('dist/stats'));
};
