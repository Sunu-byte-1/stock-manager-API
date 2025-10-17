const express = require('express')
const route = express.Router()

const controllers = require('../controllers/product.controller')


route.post('/add', controllers.addProduct)
route.get('/get', controllers.getProduct)
route.delete('/delete/:id', controllers.deleteProduct)

module.exports = route