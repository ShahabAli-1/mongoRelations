const express = require("express");

const router = new express.Router();

const Staff = require("../controllers/staffController.js");
const Right = require("../controllers/rightController.js");
const Customer = require("../controllers/customerController.js");
const Order = require("../controllers/orderController.js");
router.post("/staff/create", Staff.create);

router.post("/right/create", Right.create);

router.post("/cust/create", Customer.create);
router.post("/order/create", Order.createOrder);

router.get("/custwithorderdetail", Customer.getOrderWithCustomerDetail);

module.exports = router;
