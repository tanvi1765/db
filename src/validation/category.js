const Joi = require("joi");

// create category
const createcategory = {
    body: Joi.object().keys({
      category_name:Joi.string().required().trim(),
      category_desc: Joi.string().required().trim(),
    }),
};
/** GEt category list */
const getcategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get category details by id */
const getDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createcategory,
  getDetails,
  getcategoryList,
};

