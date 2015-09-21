var opts = require('../opts');
var log = require('../tools/log');
var exec = require('child_process').exec;

module.exports = function (cb) {
  var cmd = 'git tag -a ' + opts.nextRelease.name + ' -m ""';

  exec(cmd, function (err) {
    if (err) return false;
    log('Tag created ✓');
    return cb(null);
  });
};
