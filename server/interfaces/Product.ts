export default interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
    isSecond: boolean;
    images: Array<string>;
    categories: Array<string>;
    shopId: string;
    // Shop': userId, owner, products
}
