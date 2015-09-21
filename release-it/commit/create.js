var opts = require('../opts');
var exec = require('../tools/exec');
var async = require('async');

module.exports = function (cb) {
  async.waterfall([
    require('./stats').generate,
    require('./stats').add,

    function () {
      exec('git commit -nm "Release ' + opts.nextRelease.name + '"', function (err, data) {
        if (err) return false;
        return cb(null);
      });
    }
  ]);
};
