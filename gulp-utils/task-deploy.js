var gulp = require('gulp');

module.exports = function () {
	return gulp.src(['../dist/**/*'])
		.pipe(deploy());
}
