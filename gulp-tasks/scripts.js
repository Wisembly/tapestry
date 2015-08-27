var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function () {
  return gulp.src('./src/js/*.js')
    // .pipe(uglify())
    .pipe(concat('tapestry.js'))
    .pipe(gulp.dest('dist'));
};
