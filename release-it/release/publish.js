var opts = require('../opts');
var log = require('../tools/log');
var exec = require('child_process').exec;

module.exports = function (cb) {
  var cmd = 'curl --data \'{"tag_name": "' + opts.nextRelease.name + '","target_commitish": "master","name": "' + opts.nextRelease.name + '","body": "https://github.com/Wisembly/tapestry/compare/' + opts.lastRelease.name + '...' + opts.nextRelease.name + '","draft": true,"prerelease": false}\' https://api.github.com/repos/Wisembly/Tapestry/releases?access_token=' + opts.env.access_token + ' && npm publish';

  exec(cmd, function (err, data) {
    if (err) return false;
    log('Release published ✓');
    return cb(null);
  });
};
