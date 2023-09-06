const Joi = require("joi");

// create suppliers
const createsuppliers = {
    body: Joi.object().keys({
        suppliers:Joi.number().integer().required(),
        type: Joi.string().required().trim(),
        allowed: Joi.string().required().trim(),
    }),
};
/** GEt suppliers list */
const getsuppliersList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get suppliers details by id */
const getDetails = {
  params: Joi.object().keys({
    suppliersId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createsuppliers,
  getDetails,
  getsuppliersList,
};