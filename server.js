const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.json());

require(path.resolve('server', 'config', 'mongoose'));
require(path.resolve('server', 'config', 'routes'))(app);

app.listen(port, function(){
    console.log('listening on port:', port);
});
