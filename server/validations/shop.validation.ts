import Joi from 'joi';

const shop = {
    shop: Joi.object().keys({
        name: Joi.string().required().messages({
            'string.base': `name should be a type of string`,
            'string.empty': `name cannot be an empty field`,
            'any.required': `name is a required field`,
        }),

        images: Joi.array().items(Joi.string().required()).messages({
            'string.base': `images should be a type of string`,
            'string.empty': `images cannot be an empty field`,
            'any.required': `images is a required field`,
        }),

        rating: Joi.number().min(1).max(5).messages({
            'number.base': `rating should be a type of number`,
            'number.empty': `rating cannot be an empty field`,
            'number.min': `rating must not be less than 1`,
            'number.max': `rating must not be greater than 5`,
        }),

        description: Joi.string().min(150).required().messages({
            'string.base': `description should be a type of string`,
            'string.empty': `description cannot be an empty field`,
            'string.min': 'description must be at least 150 characters',
            'any.required': `description is a required field`,
        }),
    }),
};

export default shop;
