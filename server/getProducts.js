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
  	products.push(req.body)
	res.status(200).json(products)
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

        products.forEach(item => {

        if(index === item.id){
        const item = products.indexOf(products.find( x => {
                if(x.id == index){
                        return x
                }
        }))
        products.splice(item, 1)
        }
        else{
                console.log('Id not found')
        }
        })

}

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  editProduct,
  deleteProduct
}
