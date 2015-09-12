module.exports = function (app) {
  app.get('/stats', function (req, res) {
    res.render('stats', {
      currentPage: 'stats'
    });
  });
};
