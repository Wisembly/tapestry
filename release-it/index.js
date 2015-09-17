require('./config');

var async = require('async');

async.waterfall([
  require('./get-latest-release')
]);
