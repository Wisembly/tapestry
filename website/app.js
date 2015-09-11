var _ = require('underscore');
var express = require('express');
var path = require('path');
var app = express();

require('./helpers/mixins');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../dist')));

require('./routes/index')(app);
require('./routes/about')(app);
require('./routes/getting-started')(app);
require('./routes/components')(app);

app.listen(3000);
