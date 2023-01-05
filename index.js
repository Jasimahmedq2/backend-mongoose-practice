const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./Router/products.router');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;

// middleware
app.use(cors())
app.use(express.json())

exports.dbConnect = mongoose.connect('mongodb://localhost:27017/serviceDB')

app.use('/product', productRouter)

app.get('/', (req, res) => {
  res.send('hello, jasim your server work perfectly')
})
app.listen(port, () => {
  console.log('server is running', port)
})
