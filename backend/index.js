let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let routes = require('./routes')
let http = require('http')

app.use(bodyParser.json())

// This gets a list of the trackers
app.get('/tracker', routes.get.tracker)
// This gets the times for the trackers
app.get('/tracker/:id', routes.get.trackerData)

// This creates a new tracker
app.post('/tracker', routes.post.tracker)
// This creates a new time for the tracker
app.post('/tracker/:id', routes.post.trackerData)

http.createServer(app).listen(8089)
