var log = require('../log');
var exec = require('child_process').exec;

module.exports = function (opts, cb) {
  var cmd = 'git tag -a ' + opts.release.next.name + ' ' + opts.commit.toTag + ' -m ""';

  exec(cmd , function (err, data) {
    if (err) return cb(err);
    log('Tag created ✓');
    return cb(null, opts);
  });
};
