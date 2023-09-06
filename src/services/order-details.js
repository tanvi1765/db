const { orderdetails } = require("../models");

const createorderdetails = async (reqBody) => {
    return orderdetails.create(reqBody);
};

const getorderdetailsByName = async (orderdetails_name) => {
    return orderdetails.findOne({ orderdetails_name });
};

const getorderdetailsList = async (filter, options) => {
    return orderdetails.find();
};

const deleteorderdetails = async (orderdetailsId) => {
    return orderdetails.findByIdAndDelete(orderdetailsId);
};

const getorderdetailsById = async (orderdetailsId) => {
    return orderdetails.findById(orderdetailsId);
};

const updateDetails = async () => {
    return orderdetails.findByIdAndUpdate();
};

module.exports = {
    createorderdetails,
    getorderdetailsByName,
    getorderdetailsList,
    deleteorderdetails,
    getorderdetailsById,
    updateDetails
};