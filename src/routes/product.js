const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create product
router.post(
  "/create-product",
  validate(productValidation.createproduct),
  productController.createproductRecord
);

// Get product list
router.get(
  "/list",
  productController.getproductsList
);

// get product details by id
router.get(
  "/get-details/:productId",
  productController.getproductDetails
)

// update product
router.put(
  "/update-product/:productId",
  productController.updateproduct
)

// delete product
router.delete(
  "/delete-product/:productId",
  productController.deleteRecord
)

module.exports = router;