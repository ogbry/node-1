const express = require('express')

const bodyParser = require('body-parser')
const getProduct = require('./getProducts')
const products = require('../products.json')

const app = express()


const port = 3001;

app.use(bodyParser.json())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/products', getProduct.getProducts)
app.get('/api/products/:id', getProduct.getProductById) 
app.post('/api/products/add', function(req, res){ 
	
	console.log(req.body) 
        return res.status(200).json(req.body)
     })

app.listen( port, (error) => {

  console.log(`Server is listening on port ${port}`)

})


