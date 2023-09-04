

const { customer } = require("../models");


//  Create customer

const createcustomer = async (reqBody) => {
  return customer.create(reqBody);
};

const getcustomerList = async (filter, options) => {
  return customer.find()
};

const getcustomerById = async(customerId) => {
  return customer.findById(customerId);
}

const updateDetails = async(customerId, updateBody) => {
  return customer.findByIdAndUpdate(customerId, { $set: updateBody });
}

const deletecustomer = async (customerId) => {
  return customer.findByIdAndDelete(customerId);
}

const getcustomerByName = async (customer_name) => {
  return customer.findOne({ customer_name })
};

module.exports = {
  createcustomer,
  getcustomerList,
  getcustomerById,
  updateDetails,
  deletecustomer,
  getcustomerByName
};