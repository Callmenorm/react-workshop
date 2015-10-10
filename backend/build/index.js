'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');
var http = require('http');

app.use(bodyParser.json());

app.get('/', routes.get.id);
app.get('/:id', routes.get.id);
app.post('/:id', routes.post.id);

http.createServer(app).listen(8089);