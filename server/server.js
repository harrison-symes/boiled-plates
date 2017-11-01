const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const recipes = require('./routes/recipe')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/recipes', recipes)
server.use('/api/auth', require('./routes/auth'))

module.exports = server
