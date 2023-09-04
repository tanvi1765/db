const express = require("express");
const { suppliersValidation } = require("../../validations");
const { suppliersController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create suppliers
router.post(
  "/create-suppliers",
  validate(suppliersValidation.createsuppliers),
  suppliersController.createsuppliersRecord
);

// Get suppliers list
router.get(
  "/list",
  suppliersController.getsupplierssList
);

// get suppliers details by id
router.get(
  "/get-details/:suppliersId",
  suppliersController.getsuppliersDetails
)

// update suppliers
router.put(
  "/update-suppliers/:suppliersId",
  suppliersController.updatesuppliers
)

// delete suppliers
router.delete(
  "/delete-suppliers/:suppliersId",
  suppliersController.deleteRecord
)

module.exports = router;