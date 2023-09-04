const express = require("express");

const categoryRoute = require("./category");
const customerRoute = require("./customer");
const orderdetailsRoute = require("./order-details");
const orderRoute = require("./order");
const paymentRoute = require("./payment");
const productRoute = require("./product");
const shippersRoute = require("./shippers");
const suppliersRoute = require("./suppliers");

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/customer", customerRoute);
router.use("/orderdetals", orderdetailsRoute);
router.use("/order", orderRoute);
router.use("/payment", paymentRoute);
router.use("/product", productRoute);
router.use("/shippers", shippersRoute);
router.use("/suppliers", suppliersRoute);

module.exports = router;

