const { shippers } = require("../models");


//  Create shippers

const createshippers = async (reqBody) => {
  return shippers.create(reqBody);
};

const getshippersList = async (filter, options) => {
  return shippers.find()
};

const getshippersById = async(shippersId) => {
  return shippers.findById(shippersId);
}

const updateDetails = async(shippersId, updateBody) => {
  return shippers.findByIdAndUpdate(shippersId, { $set: updateBody });
}

const deleteshippers = async (shippersId) => {
  return shippers.findByIdAndDelete(shippersId);
}

const getshippersByName = async (shippers_name) => {
  return shippers.findOne({ shippers_name })
};

module.exports = {
  createshippers,
  getshippersList,
  getshippersById,
  updateDetails,
  deleteshippers,
  getshippersByName
};