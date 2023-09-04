const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create order
router.post(
  "/create-order",
  validate(orderValidation.createorder),
  orderController.createorderRecord
);

// Get order list
router.get(
  "/list",
  orderController.getordersList
);

// get order details by id
router.get(
  "/get-details/:orderId",
  orderController.getorderDetails
)

// update order
router.put(
  "/update-order/:orderId",
  orderController.updateorder
)

// delete order
router.delete(
  "/delete-order/:orderId",
  orderController.deleteRecord
)

module.exports = router;