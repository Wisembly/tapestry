var bs = require('browser-sync');
var deploy = require('gulp-gh-pages');
var gulp = require('gulp');
var linter  = require('gulp-scss-lint');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var Styleguide = require('styleguide-generator');

var MyStyleguide = new Styleguide({
	files: {
		src: 'src/scss',
		dist: 'dist/',
		colors: 'src/scss/utils/_colors.scss'
	},
	type: 'onepage',
	onepage: {
		layout: 'styleguide/layout.html',
		stylesheets: [
			'styleguide/styleguide.css',
			'styleguide/code-style.css',
			'dist/app.css'
		]
	},
	components: {
		extension: 'html'
	}
});

function handleError (error) {
	console.log('Error: ' + error);
	this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
		.pipe(linter({
      'config': './scss-lint.yml'
    }))
		.on('error', handleError)
		.pipe(sourcemaps.init())
    .pipe(sass())
		.on('error', handleError)
		.pipe(sourcemaps.write())
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
		files: ['./dist/**/*'],
		server: {
			baseDir: './dist/'
		}
	});
});

gulp.task('deploy', function () {
	return gulp.src(['dist/**/*'])
		.pipe(deploy());
});

gulp.task('watch', function () {
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/**/*.md'], ['styleguide']);
  gulp.watch(['./styleguide/**'], ['styleguide']);
});

gulp.task('default', ['sass', 'styleguide', 'watch', 'serve']);
