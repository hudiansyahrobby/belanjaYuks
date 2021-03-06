import Joi from 'joi';

const product = {
    product: Joi.object().keys({
        name: Joi.string().required().messages({
            'string.base': `name must be a type of string`,
            'string.empty': `name cannot be an empty field`,
            'any.required': `name is a required field`,
        }),

        quantity: Joi.number().required().min(1).messages({
            'number.base': `quantity must be a type of number`,
            'number.empty': `quantity cannot be an empty field`,
            'number.min': `quantity must not be less than 1`,
            'any.required': `quantity is a required field`,
        }),

        images: Joi.array().items(Joi.string().required()).messages({
            'any.required': `images is a required field`,
        }),

        price: Joi.number().required().min(0).messages({
            'number.base': `price must be a type of number`,
            'number.empty': `price cannot be an empty field`,
            'number.min': `price must not be less than 0`,
            'any.required': `price is a required field`,
        }),

        description: Joi.string().min(150).max(5000).required().messages({
            'string.base': `description must be a type of string`,
            'string.empty': `description cannot be an empty field`,
            'string.min': 'description must be at least 150 characters',
            'string.max': 'description must not be greater than 5000 characters',
            'any.required': `description is a required field`,
        }),

        isSecond: Joi.boolean().required().messages({
            'boolean.base': `isSecond must be a type of boolean`,
            'boolean.empty': `isSecond cannot be an empty field`,
            'any.required': `isSecond is a required field`,
        }),

        categories: Joi.array().items(Joi.string().required()).messages({
            'string.base': `categories must be a type of string`,
            'string.empty': `categories cannot be an empty field`,
            'any.required': `categories is a required field`,
        }),
    }),
};

export default product;
