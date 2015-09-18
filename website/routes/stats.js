var utils = require('uo-node-utils');
var path = require('path');

module.exports = function (app) {
  var stats = [];
  var paths = utils.read.folder(path.join(__dirname, '../../dist/stats'), 'utf8');

  paths.forEach(function (path) {
    var data = utils.read.file(path);
    stats.push(JSON.parse(data));
  });

  return app.get('/stats/:json?', function (req, res) {
    var json = req.params.json;

    return json ? res.json(stats) : res.render('stats', {
      currentPage: 'stats',
      stats: stats
    });
  });
};
