const { customer } =  require("../models");

const createcustomer = async (reqBody) => {
    return customer.create(reqBody);
};

const getcustomerByName = async (customer_name) => {
    return customer.findOne({ customer_name });
};

const getcustomerList = async (filter, options) => {
    return customer.find();
};

const deletecustomer = async (customerId) => {
    return customer.findByIdAndDelete(customerId);
};

const getcustomerById = async (customerId) => {
    return customer.findById(customerId);
};

const updateDetails = async () => {
    return customer.findByIdAndUpdate();
};

module.exports = {
    createcustomer,
    getcustomerByName,
    getcustomerList,
    deletecustomer,
    getcustomerById,
    updateDetails
};