const express = require("express");
const { orderdetailsValidation } = require("../validation");
const { orderdetailsController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create orderdetails
router.post(
  "/create-orderdetails",
  validate(orderdetailsValidation.createorderdetails),
  orderdetailsController.createorderdetails
);

// Get orderdetails list
router.get(
  "/list",
  orderdetailsController.getorderdetailsList
);
// get orderdetails details by id
router.get(
  "/get-details/:orderdetailsId",
  orderdetailsController.getorderdetailsDetails
)

// update orderdetails
router.put(
  "/update/:orderdetailsId",
  orderdetailsController.updateorderdetails
)

// delete orderdetails
router.delete(
  "/delete/:orderdetailsId",
  orderdetailsController.deleteRecord
)

module.exports = router;