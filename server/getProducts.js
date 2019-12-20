const products = require('../products.json')
const newUUID = require('uuid/v1');

function getProducts(req, res){
	if(req.query.price){
     		if(req.query.price){
       		const product = products.filter(
         	item => item.price == req.query.price
       	)
		return res.status(200).send(product)
     	}
 	 }
 	res.status(200).send(products)
}

function getProductById(req, res){
  const product = products.filter(item => {
    return req.params.id == item.id
  })
  res.send(product)
}

function postProduct(req, res){
	let init = 0
	const counter =  products.map(item=> {return init++})
	const findItem = products.filter(item => {
		return item.product_name == req.body.product_name
	})
	if(findItem.length <= 0){
		products.push({
			id: init+1,
			...req.body
		})
                res.status(200).json(products)
	}
	else{
		res.status(409).json({Error: 'Already have this item'})
	}
}

function editProduct(req, res){
	products.forEach(item => {
         if(parseInt(req.params.id) === item.id){
                item.product_name = req.body.product_name,
                item.price = req.body.price ? req.body.price : item.price
                item.img_url = req.body.img_url ? req.body.img_url : item.img_url
         }
        })
}

function deleteProduct(req, res){
	let index = parseInt(req.params.id)
	const findItem = products.filter(item => {
		return index == item.id
	})

	if(findItem.length <= 0){
		res.status(409).json({Error: 'ID not found'})
	}
	else{
		const item = products.indexOf(products.find( x => {
                	if(x.id == index){
                        	return x
	                }
       		 }))
		products.splice(item, 1)
		res.status(200).json({Message: 'Deleted', Item: index})
	}
}

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  editProduct,
  deleteProduct
}
