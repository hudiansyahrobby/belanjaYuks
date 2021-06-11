import Product from './Product';

export type Cart = Product & {
    productCart: {
        quantity: number;
    };
};
