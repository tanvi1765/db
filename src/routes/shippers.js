const express = require("express");
const { shippersValidation } = require("../../validations");
const { shippersController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create shippers
router.post(
  "/create-shippers",
  validate(shippersValidation.createshippers),
  shippersController.createshippersRecord
);

// Get shippers list
router.get(
  "/list",
  shippersController.getshipperssList
);

// get shippers details by id
router.get(
  "/get-details/:shippersId",
  shippersController.getshippersDetails
)

// update shippers
router.put(
  "/update-shippers/:shippersId",
  shippersController.updateshippers
)

// delete shippers
router.delete(
  "/delete-shippers/:shippersId",
  shippersController.deleteRecord
)

module.exports = router;