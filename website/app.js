var path = require('path');
var express = require('express');
var compression = require('compression');
var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../dist')));

require('./routes/index')(app);
require('./routes/getting-started')(app);
require('./routes/components')(app);
require('./routes/sass')(app);
require('./routes/stats')(app);
require('./routes/404')(app);

app.listen(3000);
