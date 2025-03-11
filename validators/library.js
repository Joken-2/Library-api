import Joi from "joi";

export const libraryValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string().required(),
  numberOfPage: Joi.string().required(),
  journal: Joi.string().required(),
  yearOfPublication: Joi.string().required(),
});


