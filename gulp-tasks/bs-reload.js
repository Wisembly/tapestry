var bs = require('browser-sync');

module.exports = function () {
  return bs.reload({
    stream: false
  });
};
