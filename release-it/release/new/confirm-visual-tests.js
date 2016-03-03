var log = require('../../tools/log');
var opts = require('../../opts');

module.exports = function (cb) {
  var question = 'Confirm that visual tests have been updated? (y/n)'[opts.env.promptColor || 'grey'];
  var choice;

  question = question[opts.env.promptColor || 'grey'];

  prompt.get(question, function (err, data) {
    if (err) return false;
    var choice = data[question];

    if (choice === 'Y' || choice === 'y')
      return cb(null);

    else
      log('Good luck with visual tests!');
      return false;
  });
};
