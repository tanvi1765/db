const Joi = require("joi");

// create order
const createorder = {
    body: Joi.object().keys({
      order_name:Joi.string().required().trim(),
    }),
};
/** GEt order list */
const getorderList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get order details by id */
const getDetails = {
  params: Joi.object().keys({
    orderId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createorder,
  getDetails,
  getorderList,
};

module.exports = {
    createorder
};
