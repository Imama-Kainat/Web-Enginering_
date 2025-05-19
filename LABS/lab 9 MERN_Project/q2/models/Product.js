const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Product', productSchema);
