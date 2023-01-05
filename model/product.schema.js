const { timeStamp } = require('console');
const express = require('express');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: String,
  title: String,
  price: {
    type: Number,
    require: true
  }
}, {
  timeStamps: true
})

const productModel = mongoose.model('product', ProductSchema)
module.exports = productModel;