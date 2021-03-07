import Product from '../interfaces/Product';
import Shop from '../models/shop.model';

interface ProductData {
    rows: Product[];
    count: number;
}

interface ShopData {
    rows: Shop[];
    count: number;
}

export const getPaginationData = (data: ProductData | ShopData | any, page: number, limit: number) => {
    const { count: totalItems, rows: results } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, totalPages, results, currentPage };
};
