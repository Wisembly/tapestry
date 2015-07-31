var sass       = require('gulp-sass');
var prefix     = require('gulp-autoprefixer');

module.exports = function () {
  return gulp.src('./src/scss/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist'));
};
