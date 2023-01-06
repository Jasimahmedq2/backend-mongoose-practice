const productModel = require("../model/product.schema")

exports.productController = async(req, res) => {
 try {
  const details = await productModel.create(req.body)

 } catch (error) {
  console.log(error)
 }  
}

exports.productGetController = async(req, res) => {
  try {
    const result = await productModel.find({})
    res.send(result)
  } catch (error) {
    console.log(error)
  }
}

exports.productDeleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productModel.deleteOne({id})
    res.send("delete success")
  } catch (error) {
    console.log(error)
  }

}

exports.productUpdateController = async(req, res) => {
 try {
  const id = req.params.id;
  const result = await productModel.replaceOne({id}, {name: 'new jasim', description: 'jasim you are right', title: 'new one', price: 186000})
  res.send('successfully updated ')
 } catch (error) {
  console.log(error)
  
 }
}