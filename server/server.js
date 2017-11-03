const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('superagent')

const recipes = require('./routes/recipes')
const profiles = require('./routes/profiles')
const auth = require('./routes/auth')

const server = express()

server.use('api/v1/searchfood2fork/:id', (req, res) => {
  const id = req.params.id
  request
    .get(`http://food2fork.com/api/get?key=04a1bbc8b9e4709129e5f7455aa51d17&rId=${id}`)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        res.json(res.body)
      }
    })
})

// http://food2fork.com/api/get?key=04a1bbc8b9e4709129e5f7455aa51d17&rId=35120

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', auth)

server.use('/api/recipes', recipes)

server.use('/api/profiles', profiles)

module.exports = server
