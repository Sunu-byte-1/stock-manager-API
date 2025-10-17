const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

//base de donnees
const database = require('./config/db')
database.connection()

//routes
const productRouters = require('./routes/product.routes')

app.use(express.json());

app.use('/api/produits', productRouters)

app.use('/', (req, res) => {
    console.log('reussi');
    
})

app.listen(PORT, () =>{
    console.log('serveurecoute sur 5000')
})