var async = require('async');
var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  async.waterfall([
    function (_cb) {
      exec('ls dist/css/', function (err, data) {
        return err ? log('✗ Styles failed') : _cb(null);
      });
    },

    function (_cb) {
      exec('ls dist/stats/', function (err, data) {
        return err ? log('✗ Stats failed') : _cb(null);
      });
    },

    function (_cb) {
      exec('ls dist/js/', function (err, data) {
        return err ? log('✗ Scripts failed') : _cb(null);
      });
    },

    function (_cb) {
      exec('ls dist/fonts', function (err, data) {
        return err ? log('✗ Icons failed') : _cb(null);
      });
    },

    function (_cb) {
      cb(null)
    },
  ]);
};
