var path = require('path');
var _ = require('underscore');
var express = require('express');
var components = require('./components');
var app = express();
var router = express.Router();

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', router);
app.listen(3000);



router.get('/', function (req, res) {
  res.render('index', {
    name: 'index'
  });
});

router.get('/about', function (req, res) {
  res.render('about', {
    name: 'about'
  });
});

router.get('/getting-started', function (req, res) {
  res.render('getting-started', {
    name: 'getting-started'
  });
});

router.get('/components/:name?', function (req, res) {
  var name = req.params.name;

  if (name)
    var component = _.findWhere(components, {
      name: _(name).capitalize()
    });

  res.render('components', {
    name: 'components',
    components: components,
    component: name ? component : null
  });
});
