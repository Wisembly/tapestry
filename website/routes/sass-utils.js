module.exports = function (app) {
  app.get('/sass-utils', function (req, res) {
    res.render('sass-utils', {
      currentPage: 'sass-utils'
    });
  });
};
