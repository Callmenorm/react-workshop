let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let routes = require('./routes')
let http = require('http')

app.use(bodyParser.json())

app.get('/', routes.get.id)
app.get('/:id', routes.get.id)
app.post('/:id', routes.post.id)

http.createServer(app).listen(8089)
