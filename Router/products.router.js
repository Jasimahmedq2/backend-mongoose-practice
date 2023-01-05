const express = require('express');
const { productController, productGetController } = require('../controller/product.controller');
const Router = express.Router()


Router.route('/')
.get(productGetController)
.post(productController)


module.exports = Router;