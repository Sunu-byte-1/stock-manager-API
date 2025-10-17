const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    libelle : {
        type: String,
        required: [true, 'champ obligatoire']
    },
    description : {
        type : String,
        required: [true, 'champ obligatoire']
    }, 
    prix : {
        type: Number,
        required: [true, 'champ obligatoire']
    }
})

const product = mongoose.model('Product', productSchema)
module.exports = product