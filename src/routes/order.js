const express = require("express");
const { orderValidation } = require("../validation");
const { orderController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create order
router.post(
  "/create-order",
  validate(orderValidation.createorder),
  orderController.createorder
);

// Get order list
router.get(
  "/list",
  orderController.getorderList
);
// get order details by id
router.get(
  "/get-details/:orderId",
  orderController.getorderDetails
)

// update order
router.put(
  "/update/:orderId",
  orderController.updateorder
)

// delete order
router.delete(
  "/delete/:orderId",
  orderController.deleteRecord
)

module.exports = router;