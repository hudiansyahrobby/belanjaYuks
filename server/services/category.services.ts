import Category from '../models/category.model';
import CategoryType from '../interfaces/Category';
import { Op } from 'sequelize';

export const createCategory = ({ name, images }: CategoryType) => {
    return Category.findOrCreate({
        where: {
            name: {
                [Op.iLike]: name,
            },
        },
        defaults: {
            name,
            images,
        },
    });
};

export const findCategoryById = (id: string) => {
    return Category.findOne({
        where: {
            id,
        },
    });
};

export const findAllCategories = () => {
    return Category.findAll();
};

export const updateCategoryById = (updatedCategory: CategoryType, id: string) => {
    return Category.update(updatedCategory, {
        where: {
            id,
        },
        returning: true,
    });
};

export const deleteCategoryById = (id: string) => {
    return Category.destroy({
        where: {
            id,
        },
    });
};
