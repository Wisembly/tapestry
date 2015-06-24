var sass       = require('gulp-sass');
var linter     = require('gulp-scss-lint');
var prefix     = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
  return gulp.src('./src/scss/**/*.scss')
		.pipe(linter({
      'config': './scss-lint.yml'
    }))
		.on('error', handleError)
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sourcemaps.write())
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist'));
};
