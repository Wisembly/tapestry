var log = require('./log');

module.exports = function (opts, cb) {
  var question = 'Choose a commit to tag:';

  prompt.get(question, function (err, data) {
    if (err) return 1;
    opts.commit.toTag = data[question];
    cb(null, opts);
  });
};
