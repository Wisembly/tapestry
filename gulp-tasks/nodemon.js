var nodemon = require('gulp-nodemon');
var bs = require('browser-sync');

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

module.exports = function (cb) {
  return nodemon({
    script: 'website/app.js',
    watch: ['dist/**']
  })
  .on('restart', function () {
    setTimeout(function () {
      bs.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
};
