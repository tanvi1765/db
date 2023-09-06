const { category } = require("../models");

const createcategory = async (reqBody) => {
    return category.create(reqBody);
};

const getcategoryByName = async (category_name) => {
    return category.findOne({ category_name });
};

const getcategoryList = async (filter, options) => {
    return category.find();
};

const deletecategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

const getcategoryById = async (categoryId) => {
    return category.findById(categoryId);
};

const updateDetails = async () => {
    return category.findByIdAndUpdate();
};

module.exports = {
    createcategory,
    getcategoryByName,
    getcategoryList,
    deletecategory,
    getcategoryById,
    updateDetails
};