module.exports = function () {
  gulp.watch(['./src/scss/**'], ['sass']);
  gulp.watch(['./src/**/*.md'], ['styleguide']);
  gulp.watch(['./styleguide/**'], ['styleguide']);
};
