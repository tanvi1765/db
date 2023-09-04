const express = require("express");
const { customerValidation } = require("../../validations");
const { customerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create customer
router.post(
  "/create-customer",
  validate(customerValidation.createcustomer),
  customerController.createcustomerRecord
);

// Get customer list
router.get(
  "/list",
  customerController.getcustomersList
);

// get customer details by id
router.get(
  "/get-details/:customerId",
  customerController.getcustomerDetails
)

// update customer
router.put(
  "/update-customer/:customerId",
  customerController.updatecustomer
)

// delete customer
router.delete(
  "/delete-customer/:customerId",
  customerController.deleteRecord
)

module.exports = router;