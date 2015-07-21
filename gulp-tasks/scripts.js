var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function () {
  return gulp.src('./src/js/*.js', { debug: true })
    // .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(concat('tapestry.js'))
    .pipe(gulp.dest('dist'));
};
