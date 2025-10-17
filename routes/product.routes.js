const express = require('express')
const route = express.Router()

const controllers = require('../controllers/product.controller')


route.post('/add', controllers.addProduct)