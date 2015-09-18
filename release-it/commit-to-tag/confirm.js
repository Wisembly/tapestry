var opts = require('../opts');

module.exports = function (cb) {
  var question = 'Confirm that "' + opts.nextRelease.commitSha + '" is the commit to tag? (y/n)';
  var choice;

  prompt.get(question, function (err, data) {
    if (err) return false;
    var choice = data[question];

    if (choice === 'Y' || choice === 'y')
      return cb(null);

    else if (choice === 'N' || choice === 'n') {
      question = 'Last chance fancy pants, which commit do you want to tag?';

      prompt.get(question, function (err, data) {
        if (err) return false;
        opts.nextRelease.commitSha = data[question];
        return cb(null);
      });
    }

    else
      return false;
  });
};
