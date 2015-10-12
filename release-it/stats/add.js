var exec = require('../tools/exec');
var opts = require('../opts');

module.exports = function (cb) {
  exec('git add -f dist/stats/', function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
