const express = require("express");
const { orderdetailsValidation } = require("../../validations");
const { orderdetailsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create orderdetails
router.post(
  "/create-orderdetails",
  validate(orderdetailsValidation.createorderdetails),
  orderdetailsController.createorderdetailsRecord
);

// Get orderdetails list
router.get(
  "/list",
  orderdetailsController.getorderdetailssList
);

// get orderdetails details by id
router.get(
  "/get-details/:orderdetailsId",
  orderdetailsController.getorderdetailsDetails
)

// update orderdetails
router.put(
  "/update-orderdetails/:orderdetailsId",
  orderdetailsController.updateorderdetails
)

// delete orderdetails
router.delete(
  "/delete-orderdetails/:orderdetailsId",
  orderdetailsController.deleteRecord
)

module.exports = router;