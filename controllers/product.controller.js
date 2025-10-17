const Product = require('../models/products.model')


//ajout
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

exports.getProduct =  (req, res) => {
     Product.find()
        .then((data) => {
            console.log('fetch reussi');  
            res.status(200).json({
                message : 'fetch des produits reussi',
                product : data
            })
            
        })
        .catch(err => {
            res.status(500).json({message : err.message})
     })
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)

        if (!data) {
            return res.status(404).json({
                message: 'Produit non trouvé'
        })}
        console.log('success');
        res.status(200).json({
            message: 'Produit supprimé avec succès',
            product: data
        })

    } catch (err) {
        res.status(500).json({message : 'erreur de suppression'})
    }
}

