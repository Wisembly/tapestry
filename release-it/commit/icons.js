var exec = require('../tools/exec');
var opts = require('../opts');

module.exports = {
  generate: function (cb) {
    exec('gulp icons', function (err, data) {
      if (err) return false;
      return cb(null);
    });
  },
  add: function (cb) {
    exec('git add -f dist/fonts/', function (err, data) {
      if (err) return false;
      return cb(null);
    });
  }
};
