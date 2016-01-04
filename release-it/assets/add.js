var exec = require('../tools/exec');

module.exports = function (cb) {
  exec('git add -f bower.json package.json dist/', function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
