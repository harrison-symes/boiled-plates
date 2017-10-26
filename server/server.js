var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var languages = require('./routes/languages')
var scenarios = require('./routes/scenarios')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/languages', languages)
server.use('/api/v1/scenarios', scenarios)

module.exports = function(db) {
  server.set('db', db)
  return server
}
