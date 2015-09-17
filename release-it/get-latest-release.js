var log = require('./log');

module.exports = function (cb) {
  var opts = {
    repo: 'Tapestry',
    owner: 'Wisembly',
    releases: {
      last: {
        name: null
      }
    },
    commits: {
      toTag: null
    }
  };

  Gh.releases.getLatestRelease({
    owner: opts.owner,
    repo: opts.repo
  }, function (err, data) {
    if (err) return 1;

    log('Last release: ' + data.name);
    opts.releases.last.name = data.name;

    return cb(null, opts);
  });
};
