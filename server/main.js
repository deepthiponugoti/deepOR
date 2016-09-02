var express = require('express');

var app = new express();

var parser = require('body-parser');

require('./database.js');

app.get('/', function(req, res) {
    res.render('./../app/index.ejs', {})

})
    .use(express.static(__dirname + '/../.tmp'))
    .listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/operations.js')(app);
require('./routes/users.js')(app);
require('./routes/surgeons.js')(app);
require('./routes/operationrooms.js')(app);
require('./routes/patients.js')(app);
require('./routes/surgerytypes.js')(app);
require('./routes/stats.js')(app);