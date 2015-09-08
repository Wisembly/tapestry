var gulp = require('gulp');
var bs = require('browser-sync');

module.exports = function () {
  gulp.watch('website/views/**', ['bs:reload']);
  gulp.watch('src/scss/**', ['sass']);
  gulp.watch('src/js/**', ['scripts']);
  return gulp.watch('website/public/css/**', bs.reload({
    stream: true
  }));
  // gulp.watch(['./src/**/*.md'], ['styleguide']);
};
