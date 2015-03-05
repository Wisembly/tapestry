var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var Utils = require('uo-node-utils');

gulp.task('deploy', require('./gulp-utils/task-deploy'));
gulp.task('sass', require('./gulp-utils/task-sass'));
gulp.task('serve', require('./gulp-utils/task-serve'));
gulp.task('watch', require('./gulp-utils/task-watch'));
gulp.task('styleguide', require('./gulp-utils/task-styleguide'));

gulp.task('default', ['sass', 'styleguide', 'watch', 'serve']);
