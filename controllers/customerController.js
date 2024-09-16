const Customer = require("../models/customerModel");
const Order = require("../models/orderModel");
module.exports = {
  create: async (req, res) => {
    const { name, email } = req.body;

    const newCust = await Customer.create({
      name,
      email,
    });

    res.send(newCust);
  },
  getOrderWithCustomerDetail: async (req, res) => {
    try {
      const lookupPipeline = [
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "customerId",
            as: "newField",
          },
        },
      ];

      const result = await Customer.aggregate(lookupPipeline);
      res.send({ msg: "Order Details are:", orders: result });
    } catch (error) {
      res.send(error);
    }
  },
};
