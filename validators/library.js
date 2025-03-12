import Joi from 'joi';

// Define the validation schema
export const libraryValidator = Joi.object({
  title: Joi.string().required(),
  bookDescription: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string().required(),
  ISBN: Joi.string().required(),
  category: Joi.string().required(),
  yearOfPublication: Joi.string().required(),
  numberOfPages: Joi.string().required() // Added number_of_pages as a string
});
