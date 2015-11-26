require('./config');

var async = require('async');

async.waterfall([
  require('./release/get-latest'),
  require('./release/new/choose-name'),
  require('./release/new/confirm-name'),

  require('./assets/generate'),
  require('./assets/check'),
  require('./assets/package'),
  require('./assets/add'),

  require('./commit/create'),
  require('./commit/push'),

  require('./tag/check-remote'),
  require('./tag/check-local'),
  require('./tag/create'),
  require('./tag/push'),

  require('./release/publish')
]);
