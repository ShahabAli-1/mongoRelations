const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
  orderNumber: String,
  customerId: mongoose.Schema.Types.ObjectId,
  amount: Number,
});

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
