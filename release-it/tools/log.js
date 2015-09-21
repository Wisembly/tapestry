var chalk = require('chalk');

module.exports = function (str, color) {
  var textColor = color ? color : 'gray';
  var content = typeof str === 'object' ? JSON.stringify(str) : str;

  return console.log(chalk[textColor]('- ' + content));
};
