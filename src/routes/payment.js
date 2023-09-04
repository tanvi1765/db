const express = require("express");
const { paymentValidation } = require("../../validations");
const { paymentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create payment
router.post(
  "/create-payment",
  validate(paymentValidation.createpayment),
  paymentController.createpaymentRecord
);

// Get payment list
router.get(
  "/list",
  paymentController.getpaymentsList
);

// get payment details by id
router.get(
  "/get-details/:paymentId",
  paymentController.getpaymentDetails
)

// update payment
router.put(
  "/update-payment/:paymentId",
  paymentController.updatepayment
)

// delete payment
router.delete(
  "/delete-payment/:paymentId",
  paymentController.deleteRecord
)

module.exports = router;