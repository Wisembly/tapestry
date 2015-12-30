module.exports = function (app) {
  app.get('/sass', function (req, res) {
    res.render('sass', {
      currentPage: 'sass'
    });
  });
};
