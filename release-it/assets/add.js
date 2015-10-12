var exec = require('../tools/exec');

module.exports = function (cb) {
  exec('git add -f dist/', function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
