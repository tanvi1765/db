const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(categoryValidation.createcategory),
  categoryController.createcategoryRecord
);

// Get category list
router.get(
  "/list",
  categoryController.getcategorysList
);

// get category details by id
router.get(
  "/get-details/:categoryId",
  categoryController.getcategoryDetails
)

// update category
router.put(
  "/update-category/:categoryId",
  categoryController.updatecategory
)

// delete category
router.delete(
  "/delete-category/:categoryId",
  categoryController.deleteRecord
)

module.exports = router;