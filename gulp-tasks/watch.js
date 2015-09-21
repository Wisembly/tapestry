var gulp = require('gulp');
var bs = require('browser-sync');

module.exports = function () {
  gulp.watch(['website/views/**', 'website/components/components.json'], ['bs:reload']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**', ['scripts']);
  gulp.watch('src/**/*.md', ['styleguide']);
  gulp.watch('website/public/css/**', bs.reload({
    stream: true
  }));
};
