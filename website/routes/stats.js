var utils = require('uo-node-utils');
var path = require('path');

module.exports = function (app) {
  var stats = getStats();

  return app.get('/stats/:json?', function (req, res) {
    var json = req.params.json;

    return json ? res.json(stats) : res.render('stats', {
      currentPage: 'stats',
      stats: stats
    });
  });
};


function getStats () {
  var data = [];
  var files = utils.read.folder(path.join(__dirname, '../../dist/stats'), 'utf8');

  files.forEach(function (filePath, i) {
    var fileContent = utils.read.file(filePath);
    var fileVersion = filePath.split('dist/stats/')[1].split('.json')[0];

    fileContent = JSON.parse(fileContent);
    fileContent.version = fileVersion;

    data.push(fileContent);
  });

  return data;
}
