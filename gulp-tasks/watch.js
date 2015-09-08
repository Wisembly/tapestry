var gulp = require('gulp');
var bs = require('browser-sync');

module.exports = function () {
  gulp.watch('website/views/**', ['bs:reload']);
  gulp.watch('src/scss/**', ['sass']);
  return gulp.watch('src/js/**', ['scripts']);
  // gulp.watch(['./src/**/*.md'], ['styleguide']);
};
