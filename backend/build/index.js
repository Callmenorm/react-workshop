'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');
var http = require('http');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// This gets a list of the trackers
app.get('/tracker', routes.get.tracker);
// This gets the times for the trackers
app.get('/tracker/:id', routes.get.trackerData);

// This creates a new tracker
app.post('/tracker', routes.post.tracker);
// This creates a new time for the tracker
app.post('/tracker/:id', routes.post.trackerData);

http.createServer(app).listen(8089);