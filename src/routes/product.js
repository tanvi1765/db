const express = require("express");
const { productValidation } = require("../validation");
const { productController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create product
router.post(
  "/create-product",
  validate(productValidation.createproduct),
  productController.createproduct
);

// Get product list
router.get(
  "/list",
  productController.getproductList
);
// get product details by id
router.get(
  "/get-details/:productId",
  productController.getproductDetails
)

// update product
router.put(
  "/update/:productId",
  productController.updateproduct
)

// delete product
router.delete(
  "/delete/:productId",
  productController.deleteRecord
)

module.exports = router;