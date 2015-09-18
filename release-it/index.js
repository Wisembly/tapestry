require('./config');

var async = require('async');

async.waterfall([
  require('./release/get-latest'),
  require('./commit-to-tag/choose'),
  require('./commit-to-tag/confirm'),
  require('./release/new/choose-name'),
  require('./release/new/confirm-name'),
  require('./tag/create'),
  require('./tag/push'),
  require('./release/push')
]);
