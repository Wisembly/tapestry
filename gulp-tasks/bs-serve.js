var bs = require('browser-sync');

module.exports = function () {
  return bs.init(['website/public/css/**', 'website/public/js/**'], {
    port: 4000,
    ghostMode: false
  });
};
