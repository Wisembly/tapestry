require('./config');

var async = require('async');

async.waterfall([
  require('./release/get-latest'),
  require('./release/new/choose-name'),
  require('./release/new/confirm-name'),
  require('./tag/create'),
  require('./commit/create'),
  require('./tag/push'),
  require('./commit/push'),
  require('./release/publish'),
  require('./release/push')
]);
