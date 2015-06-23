var bs          = require('browser-sync');
var deploy      = require('gulp-gh-pages');
var gulp        = require('gulp');
var linter      = require('gulp-scss-lint');
var prefix      = require('gulp-autoprefixer');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var Styleguide  = require('styleguide-generator');
var sketch      = require('gulp-sketch');
var iconfont    = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var filter      = require('gulp-filter');
var stylestats  = require('gulp-stylestats');
var rename      = require('gulp-rename');
var execsync    = require('execsync');

var MyStyleguide = new Styleguide({
	files: {
		src: 'src/scss',
		dist: 'dist/',
		colors: 'src/scss/utils/var/_color-values.scss'
	},
	type: 'onepage',
	onepage: {
		layout: 'styleguide/layout.html',
		stylesheets: [
			'styleguide/styleguide.css',
			'styleguide/code-style.css'
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

gulp.task('icons', function(){
  return gulp.src('src/sketch/icons.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg',
      compact: 'yes',
      saveForWeb: 'yes'
    }))
    .pipe(iconfont({
      fontName: 'icons',
      appendCodepoints: false,
      normalize: true,
      centerHorizontally: true,
      fontHeight: 100
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('src/scss/components/icons/templates/_base.scss.tpl')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'icons',
          className: 'Icon'
        }))
      .pipe(rename('_base.scss'))
      .pipe(gulp.dest('src/scss/components/icons/'))

      gulp.src('src/scss/components/icons/templates/_icons.md.tpl')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'icons',
          className: 'Icon'
        }))
        .pipe(rename('icons.md'))
        .pipe(gulp.dest('src/scss/components/icons/'))
    })
    .pipe(gulp.dest('dist/fonts/'))
})


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

gulp.task('stylestats', function () {
  gulp.src('./dist/*.css')
    .pipe(stylestats());
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

gulp.task('vtests:ref', function () {
	return execsync('cd ./node_modules/backstopjs && gulp reference');
});

gulp.task('vtests:compare', ['sass', 'styleguide'], function () {
	return execsync('cd ./node_modules/backstopjs && gulp test');
});

gulp.task('default', ['sass', 'styleguide', 'watch', 'serve']);
