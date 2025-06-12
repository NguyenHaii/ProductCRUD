const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Id: { type: String, required: true, unique: true },
  Title: String,
  Price: Number,
  IDate: Date,
  Quantity: Number
});


module.exports = mongoose.model('Product', ProductSchema);
