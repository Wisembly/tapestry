var log = require('../log');
var opts = require('../opts');

module.exports = function (cb) {
  var question = 'Choose a commit to tag:';

  prompt.get(question, function (err, data) {
    if (err) return false;
    opts.nextRelease.commitSha = data[question];
    cb(null);
  });
};
