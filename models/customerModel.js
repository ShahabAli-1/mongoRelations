const mongoose = require("mongoose");

// Define the Customer schema
const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create the Customer model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
