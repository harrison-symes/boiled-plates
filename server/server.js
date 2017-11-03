const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const recipes = require('./routes/recipes')
const profiles = require('./routes/profiles')
const auth = require('./routes/auth')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', auth)

server.use('/api/recipes', recipes)

server.use('/api/profiles', profiles)

module.exports = server
