const express = require("express");
const { customerValidation } = require("../validation");
const { customerController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create customer
router.post(
  "/create-customer",
  validate(customerValidation.createcustomer),
  customerController.createcustomer
);

// Get customer list
router.get(
  "/list",
  customerController.getcustomerList
);
// get customer details by id
router.get(
  "/get-details/:customerId",
  customerController.getcustomerDetails
)

// update customer
router.put(
  "/update/:customerId",
  customerController.updatecustomer
)

// delete customer
router.delete(
  "/delete/:customerId",
  customerController.deleteRecord
)

module.exports = router;