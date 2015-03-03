var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var bs = require('browser-sync');
var linter  = require('gulp-scss-lint');
var Styleguide = require('styleguide-generator');

var MyStyleguide = new Styleguide({
	onePage: true,
	srcFolder: 'src/',
	distFolder: 'styleguide',
	layoutPath: 'styleguide/layout.html',
	colorsPath: 'src/utils/_colors.scss',
	components: {
		folder: '',
		filesExtension: 'html'
	}
});

function handleError (error) {
	console.log('Error: ' + error);
	this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
		.pipe(linter({
      'config': './scss-lint.yml'
    }))
		.on('error', handleError)
    .pipe(sass())
		.on('error', handleError)
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('styleguide', function () {
  return MyStyleguide.generate(function () {
		return console.log('✓ Styleguide generated');
   });
});

gulp.task('serve', function() {
	return bs({
		files: ['./dist/app.css', './styleguide/**'],
		startPath: '/styleguide/index.html',
		server: {
			baseDir: './'
		}
	});
});


gulp.task('watch', function () {
  gulp.watch(['./src/**/*.scss'], ['sass']);
  gulp.watch(['./src/**/*.md'],   ['styleguide']);
});

gulp.task('default', ['sass', 'styleguide', 'watch', 'serve']);
