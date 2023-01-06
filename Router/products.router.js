const { json } = require('express');
const express = require('express');
const { productController, productGetController, productDeleteController, productUpdateController } = require('../controller/product.controller');
const Router = express.Router()


Router.route('/')
.get(productGetController)
.post(productController)
Router.route('/:id')
.put(productUpdateController)
.delete(productDeleteController)


module.exports = Router;