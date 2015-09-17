module.exports = function (opts, cb) {
  var question = 'Confirm that "' + opts.release.next.name + '" will be the name of the next release? (y/n)';
  var choice;

  prompt.get(question, function (err, data) {
    if (err) return 1;
    var choice = data[question];

    if (choice === 'Y' || choice === 'y')
      return cb(null, opts);

    else if (choice === 'N' || choice === 'n') {
      question = 'Last chance fancy pants, what\'s the release\' name?';

      prompt.get(question, function (err, data) {
        if (err) return 1;
        opts.release.next.name = data[question];
        return cb(null, opts);
      });
    }

    else
      return 1;
  });
};
