const { payment } = require("../models");


//  Create payment

const createpayment = async (reqBody) => {
  return payment.create(reqBody);
};

const getpaymentList = async (filter, options) => {
  return payment.find()
};

const getpaymentById = async(paymentId) => {
  return payment.findById(paymentId);
}

const updateDetails = async(paymentId, updateBody) => {
  return payment.findByIdAndUpdate(paymentId, { $set: updateBody });
}

const deletepayment = async (paymentId) => {
  return payment.findByIdAndDelete(paymentId);
}

const getpaymentByName = async (payment_name) => {
  return payment.findOne({ payment_name })
};

module.exports = {
  createpayment,
  getpaymentList,
  getpaymentById,
  updateDetails,
  deletepayment,
  getpaymentByName
};