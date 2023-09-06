const { suppliers } = require("../models");

const createsuppliers = async (reqBody) => {
    return suppliers.create(reqBody);
};

const getsuppliersByName = async (suppliers_name) => {
    return suppliers.findOne({ suppliers_name });
};

const getsuppliersList = async (filter, options) => {
    return suppliers.find();
};

const deletesuppliers = async (suppliersId) => {
    return suppliers.findByIdAndDelete(suppliersId);
};

const getsuppliersById = async (suppliersId) => {
    return suppliers.findById(suppliersId);
};

const updateDetails = async () => {
    return suppliers.findByIdAndUpdate();
};

module.exports = {
    createsuppliers,
    getsuppliersByName,
    getsuppliersList,
    deletesuppliers,
    getsuppliersById,
    updateDetails
};