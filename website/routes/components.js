var _ = require('underscore');
var utils = require('uo-node-utils');
var path = require('path');

module.exports = function (app) {
  app.get('/components/:name?', function (req, res) {
    var name = req.params.name;
    var componentsPath = path.join(__dirname, '../components/components.json');
    var components = utils.read.file(componentsPath);

    components = JSON.parse(components).components;

    // var component = name ? _.findWhere(components, {
    //   name: _(name).capitalize()
    // }) : null;

    // console.log('*', component);

    return res.render('components', {
      currentPage: 'components',
      // currentComponent: component ? component.name : null,
      components: components//,
      // component: component
    });

    // if (name && !component)
    //   return res.redirect('/404');
    //
    // return res.render(name ? 'component' : 'components', {
    //   currentPage: 'components',
    //   currentComponent: component ? component.name : null,
    //   components: components,
    //   component: component
    // });
  });
};
