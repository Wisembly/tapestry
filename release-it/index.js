require('./config');

var async = require('async');

async.waterfall([
  require('./get-latest-release'),
  require('./choose-commit-to-tag'),
  require('./confirm-commit-to-tag'),
  require('./choose-release-name'),
  require('./confirm-release-name'),

  function (opts, cb) {
    console.log(opts);
  }
]);
