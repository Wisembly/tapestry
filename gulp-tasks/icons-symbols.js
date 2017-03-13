var gulp =     require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin =   require('gulp-svgmin');
var path =     require('path');
var rename =   require('gulp-rename');

module.exports = function () {
  return gulp.src('./src/svg/icons/*.svg')
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [
          { cleanupIDs: { remove: true } },
          { removeStyleElement: true },
          { convertStyleToAttrs: true }
        ]
      }
    }))
    .pipe(svgstore())
    .pipe(rename('tapestry-symbols.svg'))
    .pipe(gulp.dest('dist/fonts'));
};
