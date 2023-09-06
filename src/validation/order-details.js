const Joi = require("joi");

// create orderdetails
const createorderdetails = {
    body: Joi.object().keys({
        order_name:Joi.string().required().trim(),
        order_desc: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        color: Joi.string().required().trim(),
        order_desc: Joi.string().required().trim(),
        details: Joi.string().required().trim(),
    }),
};
/** GEt orderdetails list */
const getorderdetailsList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get orderdetails details by id */
const getDetails = {
  params: Joi.object().keys({
    orderdetailsId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createorderdetails,
  getDetails,
  getorderdetailsList,
};