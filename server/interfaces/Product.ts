export default interface Product {
    name: string;
    quantity: number;
    price: number;
    description: string;
    isSecond: boolean;
    images: Array<string>;
}
