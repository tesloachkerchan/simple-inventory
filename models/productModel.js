const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
