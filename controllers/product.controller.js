const Product = require('../models/products.model')

exports.addProduct = (req, res) => {
    const newProduct = {
        libelle : req.body.libelle,
        description : req.body.description,
        prix : req.body.prix
    }

    Product.create(newProduct)
        .then((data) => {
            res.status(201).json(data)
            console.log('success');  
        })
        .catch(err => {
            res.status(500).json({message : err.message})
        })
}