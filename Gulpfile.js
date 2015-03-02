var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync');
var linter  = require('gulp-scss-lint');
var plumber = require('gulp-plumber');
var Styleguide = require('styleguide-generator');

var MyStyleguide = new Styleguide({
	onePage: true,
	srcFolder: 'src/',
	distFolder: 'styleguide',
	layoutPath: 'styleguide/layout.html',
	components: {
		folder: '',
		filesExtension: 'html'
	}
});



gulp.task('lint', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(linter({
      'config': './scss-lint.yml',
    }));
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('styleguide', function () {
  return MyStyleguide.generate( function () {
		return console.log('✓ Styleguide generated');
   });
});

gulp.task('serve', function() {
	bs({
		server: {
			baseDir: './'
		},
		startPath: '/styleguide/index.html'
	});
});


gulp.task('watch', function () {
  gulp.watch(['./src/**/*.scss'], ['sass', 'styleguide', bs.reload]);
  gulp.watch(['./src/**/*.md'],   ['styleguide', bs.reload]);
});

gulp.task('default', ['sass', 'styleguide', 'watch', 'serve']);
