var opts = require('../opts');
var log = require('../tools/log');
var exec = require('child_process').exec;

module.exports = function (cb) {
  var cmd = 'git show-ref refs/tags/' + opts.nextRelease.name;

  exec(cmd, function (err, data) {
    return data ?
      log('✗ Tag already exist in local') :
      cb(null);
  });
};
