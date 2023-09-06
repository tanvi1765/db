const express = require("express");
const { shippersValidation } = require("../validation");
const { shippersController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create shippers
router.post(
  "/create-shippers",
  validate(shippersValidation.createshippers),
  shippersController.createshippers
);

// Get shippers list
router.get(
  "/list",
  shippersController.getshippersList
);
// get shippers details by id
router.get(
  "/get-details/:shippersId",
  shippersController.getshippersDetails
)

// update shippers
router.put(
  "/update/:shippersId",
  shippersController.updateshippers
)

// delete shippers
router.delete(
  "/delete/:shippersId",
  shippersController.deleteRecord
)

module.exports = router;