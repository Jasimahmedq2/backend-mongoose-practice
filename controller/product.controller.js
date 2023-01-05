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