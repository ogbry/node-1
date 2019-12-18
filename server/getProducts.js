const products = require('../products.json')

function getProducts(req, res){
  console.log(req.query)
  
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
  console.log(req.body)
}

module.exports = {
  getProducts,
  getProductById,
  postProduct

}
