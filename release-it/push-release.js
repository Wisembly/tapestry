var log = require('./log');
var exec = require('child_process').exec;

module.exports = function (opts, cb) {
  var cmd = 'curl --data \'{"tag_name": "' + opts.release.next.name + '","target_commitish": "master","name": "' + opts.release.next.name + '","body": "Release body","draft": false,"prerelease": false}\' https://api.github.com/repos/Wisembly/Tapestry/releases?access_token=' + opts.env.access_token;

  exec(cmd , function (err, data) {
    if (err) return cb(err);
    log('Release published ✓');
    return cb(null, opts);
  });
};
