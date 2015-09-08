var gulp = require('gulp');

handleError = function (error) {
	console.log('Error: ' + error);
	this.emit('end');
};



gulp.task('sass', require('./gulp-tasks/sass'));
gulp.task('styleguide', require('./gulp-tasks/styleguide'));
gulp.task('nodemon', require('./gulp-tasks/nodemon'));
gulp.task('bs:serve', require('./gulp-tasks/bs-serve'));
gulp.task('bs:reload', require('./gulp-tasks/bs-reload'));
gulp.task('watch', require('./gulp-tasks/watch'));



gulp.task('default', ['styleguide', 'sass', 'nodemon', 'bs:serve', 'watch']);


// gulp.task('icons', require('./gulp-tasks/icons'));
// gulp.task('scripts',    require('./gulp-tasks/scripts'));
// gulp.task('stats',      require('./gulp-tasks/stats'));
// gulp.task('deploy',     require('./gulp-tasks/deploy'));

// gulp.task('default', ['scripts', 'sass', 'styleguide', 'watch', 'serve']);
