const routes = require('express').Router
const { User } = require('./app/models')

User.create({
  name: 'Gabriel Siveira',
  email: 'gabriel@gabrielsilveira.com.br',
  password_hash: '123412451543'
})

module.exports = routes