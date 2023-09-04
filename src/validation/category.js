const Joi = require("joi");

// create category
const createcategory = {
    body: Joi.object().keys({
        hotal_branch: Joi.number().integer(),
        hotal_name: Joi.string().required().trim(),
        hotal_location: Joi.string().required().trim(),
        contact_number: Joi.number().integer(),
        room_no: Joi.number().integer(),
        room_type: Joi.string().required().trim(),
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

module.exports = {
    createHotal
};
