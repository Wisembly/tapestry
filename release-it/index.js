require('./config');

var async = require('async');

async.waterfall([
  require('./release/get-latest'),
  require('./release/new/choose-name'),
  require('./release/new/confirm-name'),
  require('./tag/create'),
  require('./commit/stats').generate,
  require('./commit/stats').add,
  require('./commit/css').generate,
  require('./commit/css').add,
  require('./commit/js').generate,
  require('./commit/js').add,
  require('./commit/icons').generate,
  require('./commit/icons').add,
  require('./commit/create'),
  require('./tag/push'),
  require('./commit/push'),
  require('./release/publish')
]);
