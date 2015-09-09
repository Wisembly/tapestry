var express = require('express');
var app = express();
var router = express.Router();
var pages = [{
  hash: '/',
  template: 'index'
}, {
  hash: '/about',
  template: 'about'
}, {
  hash: '/components',
  template: 'components'
}, {
  hash: '/getting-started',
  template: 'getting-started'
}, {
  hash: '*',
  template: '404'
}];

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

app.listen(3000);

pages.forEach(function (page) {
  router.get(page.hash, function (req, res) {
    res.render(page.template, {
      currentPage: page.template
    })
  });
});
