var chalk = require('chalk');
var opts = require('../opts');

module.exports = function (str, color) {
  var textColor = opts.env.promptColor || 'gray';
  var content = typeof str === 'object' ? JSON.stringify(str) : str;

  return console.log(chalk[textColor]('- ' + content));
};
