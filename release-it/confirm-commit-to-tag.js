module.exports = function (opts, cb) {
  var question = 'Confirm that "' + opts.commit.toTag + '" is the commit to tag? (y/n)';
  var choice;

  prompt.get(question, function (err, data) {
    if (err) return 1;
    var choice = data[question];

    if (choice === 'Y' || choice === 'y')
      return cb(null, opts);

    else if (choice === 'N' || choice === 'n') {
      question = 'Last chance fancy pants, which commit do you want to tag?';

      prompt.get(question, function (err, data) {
        if (err) return 1;
        opts.commit.toTag = data[question];
        return cb(null, opts);
      });
    }

    else
      return 1;
  });
};
