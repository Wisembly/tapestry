var express = require('express');
var routes = require('./routes');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

app.listen(3000);

routes.forEach(function (page) {
  router.get(page.hash, function (req, res) {
    res.render(page.opts.name, page.opts);
  });
});
