const Joi = require("joi");

// create product
const createproduct = {
    body: Joi.object().keys({
        product_name:Joi.string().required().trim(),
        product_des: Joi.string().required().trim(),
        color: Joi.string().required().trim(),
        discount: Joi.string().required().trim(),
        note: Joi.string().required().trim(),
    }),
};
/** GEt product list */
const getproductList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get product details by id */
const getDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createproduct,
  getDetails,
  getproductList,
};