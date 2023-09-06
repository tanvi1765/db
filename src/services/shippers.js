const { shippers } =require("../models");

const createshippers = async (reqBody) => {
    return shippers.create(reqBody);
};

const getshippersByName = async (shippers_name) => {
    return shippers.findOne({ shippers_name });
};

const getshippersList = async (filter, options) => {
    return shippers.find();
};

const deleteshippers = async (shippersId) => {
    return shippers.findByIdAndDelete(shippersId);
};

const getshippersById = async (shippersId) => {
    return shippers.findById(shippersId);
};

const updateDetails = async () => {
    return shippers.findByIdAndUpdate();
};

module.exports = {
    createshippers,
    getshippersByName,
    getshippersList,
    deleteshippers,
    getshippersById,
    updateDetails
};