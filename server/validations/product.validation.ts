import Joi from 'joi';

const product = {
    product: Joi.object().keys({
        name: Joi.string().required().messages({
            'string.base': `name should be a type of string`,
            'string.empty': `name cannot be an empty field`,
            'any.required': `name is a required field`,
        }),

        quantity: Joi.number().required().min(1).messages({
            'number.base': `quantity should be a type of number`,
            'number.empty': `quantity cannot be an empty field`,
            'number.min': `quantity must not be less than 1`,
            'any.required': `quantity is a required field`,
        }),

        rating: Joi.number().min(1).messages({
            'number.base': `rating should be a type of number`,
            'number.empty': `rating cannot be an empty field`,
            'number.min': `rating must not be less than 1`,
        }),

        images: Joi.array().items(Joi.string().required()).messages({
            'string.base': `images should be a type of string`,
            'string.empty': `images cannot be an empty field`,
            'any.required': `images is a required field`,
        }),

        price: Joi.number().required().min(1).messages({
            'number.base': `price should be a type of number`,
            'number.empty': `price cannot be an empty field`,
            'number.min': `price must be greater than 0`,
            'any.required': `price is a required field`,
        }),

        description: Joi.string().min(150).required().messages({
            'string.base': `description should be a type of string`,
            'string.empty': `description cannot be an empty field`,
            'string.min': 'description must be at least 150 characters',
            'any.required': `description is a required field`,
        }),

        isSecond: Joi.boolean().required().messages({
            'boolean.base': `isSecond should be a type of boolean`,
            'boolean.empty': `isSecond cannot be an empty field`,
            'any.required': `isSecond is a required field`,
        }),

        categories: Joi.array().items(Joi.string().required()).messages({
            'string.base': `categories should be a type of string`,
            'string.empty': `categories cannot be an empty field`,
            'any.required': `categories is a required field`,
        }),
    }),
};

export default product;
