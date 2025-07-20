const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  brand: { type: String },
  status: { type: String },
  category: { type: String },
  image: { type: String },
  description: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
