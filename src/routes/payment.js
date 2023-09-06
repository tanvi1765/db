const express = require("express");
const { paymentValidation } = require("../validation");
const { paymentController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create payment
router.post(
  "/create-payment",
  validate(paymentValidation.createpayment),
  paymentController.createpayment
);

// Get payment list
router.get(
  "/list",
  paymentController.getpaymentList
);
// get payment details by id
router.get(
  "/get-details/:paymentId",
  paymentController.getpaymentDetails
)

// update payment
router.put(
  "/update/:paymentId",
  paymentController.updatepayment
)

// delete payment
router.delete(
  "/delete/:paymentId",
  paymentController.deleteRecord
)

module.exports = router;