const Joi = require("joi");

// create customer
const createcustomer = {
    body: Joi.object().keys({
        f_name:Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
    }),
};
/** GEt customer list */
const getcustomerList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get customer details by id */
const getDetails = {
  params: Joi.object().keys({
    customerId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createcustomer,
  getDetails,
  getcustomerList,
};