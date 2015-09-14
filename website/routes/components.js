var _ = require('underscore');
var styleguide = require('../../styleguide');

module.exports = function (app) {
  app.get('/components/:name?', function (req, res) {
    var name = req.params.name;
    var components = styleguide.instance._getComponents();
    var component = name ? _.findWhere(components, {
      name: _(name).capitalize()
    }) : null;

    return res.render(name ? 'component' : 'components', {
      currentPage: 'components',
      currentComponent: component ? component.name : null,
      components: components,
      component: component
    });
  });
};
