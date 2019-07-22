const express = require('express');
// const products = require('../products.json');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

const port = 3000;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct)

app.listen(port, (error) => {
	
	if(error){
		console.log('error')
	}

	console.log(`Server listening on port: ${port}`);
})