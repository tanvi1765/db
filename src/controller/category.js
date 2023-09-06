const { categoryService } = require("../services");

// create-category
const createcategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const categoryEx = await categoryService.getcategoryByName(reqBody.category_name);
    if (categoryEx) {
      throw new Error(`please add other category this category already created.`);
    }

    const category = await categoryService.createcategory(reqBody);

    res.status(200).json({
      success: true,
      message: "category create successfully!",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-category
const getcategoryList = async (req, res) => {
  try {
    const getcategory = await categoryService.getcategoryList();

    res.status(200).json({
      success: true,
      message: "category List!",
      data: {
        getcategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-category
const deleteRecord = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await categoryService.getcategoryById(categoryId);
    if (!cateExists) {
      throw new Error("category not found!");
    }

    await categoryService.deletecategory(categoryId);

    res.status(200).json({
      success: true,
      message: "category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get category by id
const getcategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getcategoryById(
      req.params.categoryId
    );
    if (!getDetails) {
      throw new Error("category not found!");
    }

    res.status(200).json({
      success: true,
      message: "category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update category by id
const updatecategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const cateExists = await categoryService.getcategoryById(categoryId);
    if (!cateExists) {
      throw new Error("category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createcategory,
  getcategoryList,
  deleteRecord,
  getcategoryDetails,
  updatecategory
};