const Joi = require("joi");

// create payment
const createpayment = {
    body: Joi.object().keys({
        payment:Joi.number().integer().required(),
        type: Joi.string().required().trim(),
        allowed: Joi.string().required().trim(),
    }),
};
/** GEt payment list */
const getpaymentList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get payment details by id */
const getDetails = {
  params: Joi.object().keys({
    paymentId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createpayment,
  getDetails,
  getpaymentList,
};