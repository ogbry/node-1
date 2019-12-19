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
	products.push(req.body)
        res.status(200).json(products)
     })
app.patch('/api/products/edit/:id', function(req, res){
	products.forEach(item => {
	 if(parseInt(req.params.id) === item.id){
		item.product_name = req.body.product_name,
		item.price = req.body.price ? req.body.price : item.price
		item.img_url = req.body.img_url ? req.body.img_url : item.img_url
	 }
	})
})
app.delete('/api/products/delete/:id', function(req, res){
	let index = parseInt(req.params.id)

	products.forEach(item => {

	if(index === item.id){
	const item = products.indexOf(products.find( x => {
		if(x.id == index){
			console.log(x)
			return x
		}
	}))
	products.splice(item, 1)
	}
	else{
		console.log('Id not found')
	}
	})

	
})

app.listen( port, (error) => {  console.log(`Server is listening on port ${port} c((•ω•))ɔ`)  })
