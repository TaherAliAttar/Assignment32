var express = require('express');
var app = express();

var routes=require('./routes/route.js');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 3500;
var server = app.listen(port, function (req, res) {
    console.log("catch the action at http://localhost:" + port);
}
);