var express = require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

app.listen(3000);

router.get('/', function (req, res) {
  res.render('index', {
    currentPage: 'home'
  });
});

router.get('/about', function (req, res) {
  res.render('about', {
    currentPage: 'about'
  });
});
