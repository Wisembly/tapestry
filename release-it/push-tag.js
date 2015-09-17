var log = require('./log');
var exec = require('child_process').exec;

module.exports = function (opts, cb) {
  var cmd = 'git push origin ' + opts.release.next.name;

  exec(cmd , function (err, data) {
    if (err) return cb(err);
    log('Tag pushed ✓');
    return cb(null, opts);
  });
};
