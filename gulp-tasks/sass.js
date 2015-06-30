var sass       = require('gulp-sass');
var linter     = require('gulp-scss-lint');
var prefix     = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
  return gulp.src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
};
