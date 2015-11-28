var async = require('async');
var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  async.waterfall([
    function (_cb) {
      log('Packaging tapestry-latest.zip');
      exec('cd dist && rm tapestry-latest.zip || true', function (err, data) {
        return err ? log('✗ Packaging failed') : _cb(null);
      });
    },

    function (_cb) {
      exec('cd dist && zip -r tapestry-latest.zip css fonts js', function (err, data) {
        return err ? log('✗ Packaging failed') : _cb(null);
      });
    },

    function (_cb) {
      log('Package created ✓');
      cb(null)
    },
  ]);
};
