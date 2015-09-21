var exec = require('../tools/exec');
var opts = require('../opts');

module.exports = {
  generate: function (cb) {
    exec('gulp stats --' + opts.nextRelease.name, function (err, data) {
      if (err) return false;
      return cb(null);
    });
  },
  add: function (cb) {
    exec('git add -f dist/stats/', function (err, data) {
      if (err) return false;
      return cb(null);
    });
  }
};
