module.exports = function (app) {
  app.get('/getting-started', function (req, res) {
    res.render('getting-started', {
      name: 'getting-started'
    });
  });
};
