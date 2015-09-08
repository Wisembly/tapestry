var express = require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

router.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
