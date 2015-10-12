var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  var cmd = 'gulp stats --' + opts.nextRelease.name;

  exec(cmd, function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
