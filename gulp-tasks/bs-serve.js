var bs = require('browser-sync');

module.exports = function () {
  return bs.init(['website/public/**'], {
    port: 4000,
    ghostMode: false
  });
};
