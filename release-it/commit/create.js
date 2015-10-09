var opts = require('../opts');
var exec = require('../tools/exec');

module.exports = function (cb) {
  var cmd = 'git commit -nm "Release ' + opts.nextRelease.name + '"';

  exec(cmd, function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
