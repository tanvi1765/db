const Joi = require("joi");

// create shippers
const createshippers = {
    body: Joi.object().keys({
        f_name:Joi.string().required().trim(),
        l_name:Joi.string().required().trim(),
        title_name:Joi.string().required().trim(),
        city:Joi.string().required().trim(),
        state:Joi.string().required().trim(),
        counrty:Joi.string().required().trim(),
        notes:Joi.string().required().trim(),
    }),
};
/** GEt shippers list */
const getshippersList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get shippers details by id */
const getDetails = {
  params: Joi.object().keys({
    shippersId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createshippers,
  getDetails,
  getshippersList,
};