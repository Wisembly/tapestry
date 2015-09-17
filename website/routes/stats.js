var utils = require('uo-node-utils');
var path = require('path');

module.exports = function (app) {
  var stats = [];
  var paths = utils.read.folder(path.join(__dirname, '../../dist/stats'), 'utf8');

  paths.forEach(function (path) {
    stats.push(utils.read.file(path));
  });

  return app.get('/stats', function (req, res) {
    res.render('stats', {
      currentPage: 'stats',
      stats: stats
    });
  });
};
