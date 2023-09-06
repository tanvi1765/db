const { product } =require("../models");

const createproduct = async (reqBody) => {
    return product.create(reqBody);
};

const getproductByName = async (product_name) => {
    return product.findOne({ product_name });
};

const getproductList = async (filter, options) => {
    return product.find();
};

const deleteproduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};

const getproductById = async (productId) => {
    return product.findById(productId);
};

const updateDetails = async () => {
    return product.findByIdAndUpdate();
};

module.exports = {
    createproduct,
    getproductByName,
    getproductList,
    deleteproduct,
    getproductById,
    updateDetails
};