var log = require('./log');
var exec = require('child_process').exec;

module.exports = function (cmd, cb) {
  log('$ ' + cmd);
  exec(cmd, cb);
};
