import { Request, Response } from 'express';
import {
    createCategory,
    deleteCategoryById,
    findCategoryById,
    findAllCategories,
    updateCategoryById,
} from '../services/category.services';
import CategoryType from '../interfaces/Category';

export const create = async (req: Request, res: Response) => {
    const { name, images }: CategoryType = req.body;

    try {
        const newCategory = { name, images };
        const [category, created] = await createCategory(newCategory);

        if (!created) {
            return res.status(400).json({ message: 'Category has already exist' });
        }

        return res.status(201).json({ message: 'Category successfully created', category });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const get = async (req: Request, res: Response) => {
    try {
        const categories = await findAllCategories();

        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const update = async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const { name, images }: CategoryType = req.body;
    try {
        const category = await findCategoryById(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const updatedCategory: CategoryType = {
            name,
            images,
        };

        const [_, _updatedCategory] = await updateCategoryById(updatedCategory, categoryId);

        return res.status(200).json({ message: 'Category successfully updated', category: _updatedCategory[0] });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const remove = async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    try {
        const category = await findCategoryById(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await deleteCategoryById(categoryId);

        return res.status(200).json({ message: 'Category successfully deleted', category });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
