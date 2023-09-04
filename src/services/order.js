const { order } = require("../models");


//  Create order

const createorder = async (reqBody) => {
  return order.create(reqBody);
};

const getorderList = async (filter, options) => {
  return order.find()
};

const getorderById = async(orderId) => {
  return order.findById(orderId);
}

const updateDetails = async(orderId, updateBody) => {
  return order.findByIdAndUpdate(orderId, { $set: updateBody });
}

const deleteorder = async (orderId) => {
  return order.findByIdAndDelete(orderId);
}

const getorderByName = async (order_name) => {
  return order.findOne({ order_name })
};

module.exports = {
  createorder,
  getorderList,
  getorderById,
  updateDetails,
  deleteorder,
  getorderByName
};