const express = require("express");
const { categoryValidation } = require("../validation");
const { categoryController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(categoryValidation.createcategory),
  categoryController.createcategory
);

// Get category list
router.get(
  "/list",
  categoryController.getcategoryList
);
// get category details by id
router.get(
  "/get-details/:categoryId",
  categoryController.getcategoryDetails
)

// update category
router.put(
  "/update/:categoryId",
  categoryController.updatecategory
)

// delete category
router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
)

module.exports = router;