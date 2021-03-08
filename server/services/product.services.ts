import Product from '../models/product.model';
import ProductType from '../interfaces/Product';
import Shop from '../models/shop.model';
import Category from '../models/category.model';
import User from '../models/user.model';

export const getProductbyId = (id: string) => {
    return Product.findOne({
        where: { id },
        include: [
            {
                model: Shop,
                attributes: ['id', 'name'],
            },
            {
                model: Category,
                attributes: ['id', 'name'],
                through: { attributes: [] },
            },
        ],
    });
};

export const createProduct = (newProduct: ProductType) => {
    return Product.create(newProduct);
};

export const getAllProducts = (
    searchCondition: any,
    limit: number,
    offset: number,
    orderBy: any,
    categoryCondition: any,
) => {
    return Product.findAndCountAll({
        where: searchCondition,
        limit,
        offset,
        order: [orderBy as any],
        include: [
            {
                model: Shop,
                attributes: ['id', 'name'],
            },
            {
                model: Category,
                where: categoryCondition,
                attributes: ['id', 'name'],
                through: { attributes: [] },
            },
        ],
    });
};

export const getProductByCategory = (categoryId: string, limit: number, offset: number, orderBy: any) => {
    return Product.findAndCountAll({
        limit,
        offset,
        order: [orderBy as any],
        include: [
            {
                model: Shop,
                attributes: { exclude: ['description', 'createdAt', 'updatedAt', 'userId'] },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name'],
                    },
                ],
            },
            {
                model: Category,
                where: {
                    id: categoryId,
                },
                attributes: ['id', 'name'],
                through: { attributes: [] },
            },
        ],
    });
};

export const updateProductById = (updatedProduct: ProductType, id: string) => {
    return Product.update(updatedProduct, {
        where: { id },
        returning: true,
    });
};

export const addCategories = (schema: any, categories: Array<string>) => {
    return schema.$add(
        'categories',
        categories.map((category: string) => category),
    );
};

export const deleteCategories = (schema: any, categories: Array<{ id: string }>) => {
    return schema.$remove(
        'categories',
        categories.map((category) => category.id),
    );
};

export const deleteProductById = (id: string) => {
    return Product.destroy({
        where: { id },
    });
};
