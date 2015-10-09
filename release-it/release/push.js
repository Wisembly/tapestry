var opts = require('../opts');
var exec = require('child_process').exec;

module.exports = function (cb) {
  var cmd = 'git push origin master';

  exec(cmd, function (err, data) {
    if (err) return false;
    return cb(null);
  });
};
