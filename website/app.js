var path = require('path');
var express = require('express');
var compression = require('compression');
var app = express();

var package = require('../package.json');

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));

require('./routes/index')(app);
require('./routes/getting-started')(app);
require('./routes/components')(app);
require('./routes/sass-utils')(app);
require('./routes/statistics')(app);
require('./routes/404')(app);

app.listen(3000);
