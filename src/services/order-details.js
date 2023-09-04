const { orderdetails } = require("../models");


//  Create orderdetails

const createorderdetails = async (reqBody) => {
  return orderdetails.create(reqBody);
};

const getorderdetailsList = async (filter, options) => {
  return orderdetails.find()
};

const getorderdetailsById = async(orderdetailsId) => {
  return orderdetails.findById(orderdetailsId);
}

const updateDetails = async(orderdetailsId, updateBody) => {
  return orderdetails.findByIdAndUpdate(orderdetailsId, { $set: updateBody });
}

const deleteorderdetails = async (orderdetailsId) => {
  return orderdetails.findByIdAndDelete(orderdetailsId);
}

const getorderdetailsByName = async (orderdetails_name) => {
  return orderdetails.findOne({ orderdetails_name })
};

module.exports = {
  createorderdetails,
  getorderdetailsList,
  getorderdetailsById,
  updateDetails,
  deleteorderdetails,
  getorderdetailsByName
};