const Order = require("../models/orderModel");
module.exports = {
  createOrder: async (req, res) => {
    const { orderNumber, customerId, amount } = req.body;

    const newOrder = await Order.create({
      orderNumber,
      customerId,
      amount,
    });

    res.send(newOrder);
  },
};
