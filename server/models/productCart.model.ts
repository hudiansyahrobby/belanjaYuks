import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Cart from './cart.model';
import Product from './product.model';

@Table({
    tableName: 'product-carts',
    timestamps: false,
})
export default class ProductCart extends Model {
    @Column
    quantity: number;

    @ForeignKey(() => Cart)
    @Column
    cartId: string;

    @ForeignKey(() => Product)
    @Column
    productId: string;
}
