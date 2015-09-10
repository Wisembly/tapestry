var _ = require('underscore');
var components = require('../components');

module.exports = function (app) {
  app.get('/components/:name?', function (req, res) {
    var name = req.params.name;

    if (name)
      return res.render('component', {
        name: 'components',
        components: components,
        component: _.findWhere(components, {
          name: _(name).capitalize()
        })
      });

    return res.render('components', {
      name: 'components',
      components: components
    });
  });
};
