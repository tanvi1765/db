const { payment } = require("../models");

const createpayment = async (reqBody) => {
    return payment.create(reqBody);
};

const getpaymentByName = async (payment_name) => {
    return payment.findOne({ payment_name });
};

const getpaymentList = async (filter, options) => {
    return payment.find();
};

const deletepayment = async (paymentId) => {
    return payment.findByIdAndDelete(paymentId);
};

const getpaymentById = async (paymentId) => {
    return payment.findById(paymentId);
};

const updateDetails = async () => {
    return payment.findByIdAndUpdate();
};

module.exports = {
    createpayment,
    getpaymentByName,
    getpaymentList,
    deletepayment,
    getpaymentById,
    updateDetails
};