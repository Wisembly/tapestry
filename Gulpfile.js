gulp = require('gulp');

handleError = function (error) {
	console.log('Error: ' + error);
	this.emit('end');
};

gulp.task('scripts',    require('./gulp-tasks/scripts'));
gulp.task('sass',       require('./gulp-tasks/sass'));
gulp.task('icons',      require('./gulp-tasks/icons'));
gulp.task('serve',      require('./gulp-tasks/browser-sync'));
gulp.task('stats',      require('./gulp-tasks/stats'));
gulp.task('watch',      require('./gulp-tasks/watch'));
gulp.task('deploy',     require('./gulp-tasks/deploy'));
gulp.task('styleguide', require('./gulp-tasks/styleguide'));

gulp.task('default', ['scripts', 'sass', 'styleguide', 'watch', 'serve']);
