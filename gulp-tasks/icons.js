var gulp        = require('gulp');
var rename      = require('gulp-rename');
var iconfont    = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var svgo        = require('gulp-svgo');

module.exports = function () {
  return gulp.src('./src/svg/icons/*.svg')
    .pipe(svgo({
      plugins: [
        { cleanupIDs: { remove: true } },
        { removeStyleElement: true },
        { removeXMLNS: true },
        { convertStyleToAttrs: true }
      ]
    }))
    .pipe(gulp.dest('./src/svg/icons'))
    .pipe(iconfont({
      fontName: 'tapestry-icons',
      normalize: true,
      centerHorizontally: true,
      fontHeight: 100,
      formats: ['eot', 'ttf', 'woff', 'woff2']
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('src/scss/components/icons/templates/_base.scss.tpl')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'tapestry-icons',
          className: 'Icon'
        }))
      .pipe(rename('_base.scss'))
      .pipe(gulp.dest('src/scss/components/icons/'));

      gulp.src('src/scss/components/icons/templates/_icons.md.tpl')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'tapestry-icons',
          className: 'Icon'
        }))
        .pipe(rename('icons.md'))
        .pipe(gulp.dest('src/scss/components/icons/'));
    })
    .pipe(gulp.dest('dist/fonts'));
};
