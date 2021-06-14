import Joi from 'joi';

const comment = {
    comment: Joi.object().keys({
        content: Joi.string().required().messages({
            'string.base': `content should be a type of string`,
            'string.empty': `content cannot be an empty field`,
            'any.required': `content is a required field`,
        }),
        rating: Joi.number().min(1).max(5).required().messages({
            'number.base': `rating should be a type of number`,
            'number.empty': `rating cannot be an empty field`,
            'number.max': `rating must be between 1-5`,
            'number.min': `rating must be between 1-5`,
            'any.required': `rating is a required field`,
        }),
    }),
};

export default comment;
