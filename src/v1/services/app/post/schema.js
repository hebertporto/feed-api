import Joi from 'joi';

export const createPostSchema = {
  body: {
    title: Joi.string().required(),
    category: Joi.string().required(),
    readingTime: Joi.string(),
    level: Joi.string(),
    body: Joi.string().required(),
    image: Joi.string(),
  },
  user: {
    _id: Joi.string().required(),
  },
  options: {
    allowUnknownBody: false,
  },
};

export const updatePostSchema = {
  body: {
    title: Joi.string().required(),
    category: Joi.string().required(),
    readingTime: Joi.string(),
    level: Joi.string(),
    body: Joi.string().required(),
    image: Joi.string(),
  },
  params: {
    postId: Joi.string().required(),
  },
  user: {
    _id: Joi.string().required(),
  },
  options: {
    allowUnknownBody: false,
  },
};