const express = require('express')

const bodyParser = require('body-parser')
const newUUID = require('uuid/v1');
const getProduct = require('./getProducts')
const products = require('../products.json')

const app = express()


const port = 3001;

app.use(bodyParser.json())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/products', getProduct.getProducts)
app.get('/api/products/:id', getProduct.getProductById) 
app.post('/api/products/add', getProduct.postProduct)
app.patch('/api/products/edit/:id', getProduct.editProduct)
app.delete('/api/products/delete/:id', getProduct.deleteProduct)

app.listen( port, (error) => {  console.log(`Server is listening on port ${port} c((•ω•))ɔ`)
})
