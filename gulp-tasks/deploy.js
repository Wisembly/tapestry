var deploy = require('gulp-gh-pages');

module.exports = function () {
	return gulp.src(['dist/**/*'])
		.pipe(deploy());
};
