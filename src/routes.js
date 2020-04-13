const AddUrl = require('./controlls/urls/addUrl.js')
const FindNewUrl = require('./controlls/urls/FindNewUrl.js')
const NotFound = require('./controlls/urls/NotFound.js')
const express = require('express')
const routes = express.Router()

routes.post('/urls/add', AddUrl.add)
routes.get('/:id', FindNewUrl.find)
routes.get('*', NotFound.error)

module.exports = routes