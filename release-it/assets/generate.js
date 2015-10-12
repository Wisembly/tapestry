var async = require('async');
var exec = require('../tools/exec');
var log = require('../tools/log');
var opts = require('../opts');

module.exports = function (cb) {
  async.waterfall([
    function (_cb) {
      exec('gulp sass', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp stats --' + opts.nextRelease.name, function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp scripts', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      exec('gulp icons', function (err, data) {
        if (err) return false;
        return _cb(null);
      });
    },

    function (_cb) {
      cb(null)
    },
  ]);
};
