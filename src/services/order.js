const { order } = require("../models");

const createorder = async (reqBody) => {
    return order.create(reqBody);
};

const getorderByName = async (order_name) => {
    return order.findOne({ order_name });
};

const getorderList = async (filter, options) => {
    return order.find();
};

const deleteorder = async (orderId) => {
    return order.findByIdAndDelete(orderId);
};

const getorderById = async (orderId) => {
    return order.findById(orderId);
};

const updateDetails = async () => {
    return order.findByIdAndUpdate();
};

module.exports = {
    createorder,
    getorderByName,
    getorderList,
    deleteorder,
    getorderById,
    updateDetails
};