module.exports = function () {
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/**/*.md'], ['styleguide']);
  gulp.watch(['./styleguide/**'], ['styleguide']);
};
