var _ = require('underscore');
var components = require('../components');

module.exports = function (app) {
  app.get('/components/:name?', function (req, res) {
    var name = req.params.name;
    var component = name ? _.findWhere(components, {
      name: _(name).capitalize()
    }) : null;

    return res.render(name ? 'component' : 'components', {
      currentPage: 'components',
      currentComponent: component.name,
      components: components,
      component: component
    });
  });
};
