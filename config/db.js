const mongoose = require('mongoose')

exports.connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/products')
    .then(() => {
        console.log('connecté au db products')
    })
    .catch(err => {
        console.log('erreur', err)
    })
}