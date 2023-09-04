const { suppliers } = require("../models");


//  Create suppliers

const createsuppliers = async (reqBody) => {
  return suppliers.create(reqBody);
};

const getsuppliersList = async (filter, options) => {
  return suppliers.find()
};

const getsuppliersById = async(suppliersId) => {
  return suppliers.findById(suppliersId);
}

const updateDetails = async(suppliersId, updateBody) => {
  return suppliers.findByIdAndUpdate(suppliersId, { $set: updateBody });
}

const deletesuppliers = async (suppliersId) => {
  return suppliers.findByIdAndDelete(suppliersId);
}

const getsuppliersByName = async (suppliers_name) => {
  return suppliers.findOne({ suppliers_name })
};

module.exports = {
  createsuppliers,
  getsuppliersList,
  getsuppliersById,
  updateDetails,
  deletesuppliers,
  getsuppliersByName
};