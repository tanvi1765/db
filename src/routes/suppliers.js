const express = require("express");
const { suppliersValidation } = require("../validation");
const { suppliersController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create suppliers
router.post(
  "/create-suppliers",
  validate(suppliersValidation.createsuppliers),
  suppliersController.createsuppliers
);

// Get suppliers list
router.get(
  "/list",
  suppliersController.getsuppliersList
);
// get suppliers details by id
router.get(
  "/get-details/:suppliersId",
  suppliersController.getsuppliersDetails
)

// update suppliers
router.put(
  "/update/:suppliersId",
  suppliersController.updatesuppliers
)

// delete suppliers
router.delete(
  "/delete/:suppliersId",
  suppliersController.deleteRecord
)

module.exports = router;