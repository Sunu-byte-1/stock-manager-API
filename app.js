const express = require('express')

const app = express()

//base de donnees
const database = require('./config/db')
database.connection()

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log('serveurecoute sur 5000')
})