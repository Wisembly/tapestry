var log = require('./log');

module.exports = function (cb) {
  var opts = require('./opts');

  Gh.releases.getLatestRelease({
    owner: opts.owner,
    repo: opts.repo
  }, function (err, data) {
    if (err) return 1;

    log('Last release: ' + data.name);
    opts.release.last.name = data.name;

    return cb(null, opts);
  });
};
