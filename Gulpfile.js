var gulp = require('gulp');
var seq = require('run-sequence');

gulp.task('sass', require('./gulp-tasks/sass'));
gulp.task('icons:font', require('./gulp-tasks/icons-font'));
gulp.task('icons:symbols', require('./gulp-tasks/icons-symbols'));
gulp.task('stats', ['sass'], require('./gulp-tasks/stats'));
gulp.task('scripts', require('./gulp-tasks/scripts'));
gulp.task('styleguide', require('./gulp-tasks/styleguide'));
gulp.task('nodemon', require('./gulp-tasks/nodemon'));
gulp.task('bs:serve', require('./gulp-tasks/bs-serve'));
gulp.task('bs:reload', require('./gulp-tasks/bs-reload'));
gulp.task('watch', require('./gulp-tasks/watch'));

gulp.task('icons', function (cb) {
  return seq('icons:font', 'icons:symbols', cb);
});

gulp.task('default', function (cb) {
	return seq('sass', 'scripts', 'styleguide', ['nodemon', 'bs:serve', 'watch'], cb);
});
