var _ = require('underscore');
var fs = require('fs')
var path = require('path');

module.exports = function (app) {
  app.get('/components/:name?', function (req, res) {
    var name = req.params.name;
    var components = fs.readFileSync(path.join(__dirname, '../components/components.json'), 'utf8');

    components = JSON.parse(components).components;

    var component = name ? _.findWhere(components, {
      name: _(name).capitalize()
    }) : null;

    if (name && !component)
      return res.redirect('/404');

    return res.render(name ? 'component' : 'components', {
      currentPage: 'components',
      currentComponent: component ? component.name : null,
      components: components,
      component: component
    });
  });
};
