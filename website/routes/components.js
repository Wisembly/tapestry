var utils = require('uo-node-utils');
var path = require('path');

module.exports = function (app) {
  app.get('/components/:componentName?', function (req, res) {
    var componentName = req.params.componentName;
    var components = JSON.parse(
      utils.read.file(
        path.join(__dirname, '../components/components.json')
      )
    ).components;

    var component = componentName ? components.filter(function (_component) {
      return componentName.toLowerCase() === _component.name.toLowerCase();
    })[0] : components[0];

    if (!component)
      return res.redirect('/404');

    return res.render('components', {
      currentPage: 'components',
      components: components,
      component: component
    });
  });
};
