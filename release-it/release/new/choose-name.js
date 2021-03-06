var chalk = require('chalk');
var opts = require('../../opts');

module.exports = function (cb) {
  var question = chalk[opts.env.promptColor]('Choose a release name:');

  prompt.get(question, function (err, data) {
    if (err) return false;
    opts.nextRelease.name = data[question];
    cb(null);
  });
};
