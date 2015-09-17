require('./config');

var async = require('async');

async.waterfall([
  require('./get-latest-release'),
  require('./choose-commit-to-tag')
]);
