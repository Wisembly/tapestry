var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  Gh.releases.getLatestRelease({
    owner: opts.owner,
    repo: opts.repo
  }, function (err, data) {
    if (err) return false;

    log('Last release: ' + data.name);
    opts.lastRelease.name = data.name;

    return cb(null);
  });
};
