var bs = require('browser-sync');

module.exports = function () {
  return bs.init({
    port: 4000,
    ghostMode: false
  });
};
