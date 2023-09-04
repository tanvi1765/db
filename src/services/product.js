const { product } = require("../models");


//  Create product

const createproduct = async (reqBody) => {
  return product.create(reqBody);
};

const getproductList = async (filter, options) => {
  return product.find()
};

const getproductById = async(productId) => {
  return product.findById(productId);
}

const updateDetails = async(productId, updateBody) => {
  return product.findByIdAndUpdate(productId, { $set: updateBody });
}

const deleteproduct = async (productId) => {
  return product.findByIdAndDelete(productId);
}

const getproductByName = async (product_name) => {
  return product.findOne({ product_name })
};

module.exports = {
  createproduct,
  getproductList,
  getproductById,
  updateDetails,
  deleteproduct,
  getproductByName
};