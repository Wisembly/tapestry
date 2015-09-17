var log = require('./log');

module.exports = function (opts, cb) {
  var question = 'Choose a release name';

  prompt.get(question, function (err, data) {
    if (err) return 1;
    opts.release.next.name = data[question];
    cb(null, opts);
  });
};
