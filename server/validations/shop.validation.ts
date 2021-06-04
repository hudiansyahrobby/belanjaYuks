import Joi from 'joi';

const shop = {
    shop: Joi.object().keys({
        name: Joi.string().required().messages({
            'string.base': `name must be a type of string`,
            'string.empty': `name cannot be an empty field`,
            'any.required': `name is a required field`,
        }),

        location: Joi.string().required().messages({
            'string.base': `location must be a type of string`,
            'string.empty': `location cannot be an empty field`,
            'any.required': `location is a required field`,
        }),

        images: Joi.array().items(Joi.string().required()).messages({
            'string.base': `images must be a type of string`,
            'string.empty': `images cannot be an empty field`,
            'any.required': `images is a required field`,
        }),

        description: Joi.string().min(150).max(5000).required().messages({
            'string.base': `description must be a type of string`,
            'string.empty': `description cannot be an empty field`,
            'string.min': 'description must be at least 150 characters',
            'string.max': 'description must not be greater than 5000 characters',
            'any.required': `description is a required field`,
        }),
    }),
};

export default shop;
