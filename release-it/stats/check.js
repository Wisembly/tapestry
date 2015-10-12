var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  var cmd = 'ls dist/stats';

  exec(cmd, function (err, data) {
    if (err)
      return log('✗ Stats failed');
    return cb(null);
  });
};
