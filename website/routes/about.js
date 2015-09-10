module.exports = function (app) {
  app.get('/about', function (req, res) {
    res.render('about', {
      name: 'about'
    });
  });
};
