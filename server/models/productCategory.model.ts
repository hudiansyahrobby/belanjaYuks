import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Category from './category.model';
import Product from './product.model';

@Table({
    tableName: 'product-categories',
    timestamps: false,
})
export default class ProductCategory extends Model {
    @ForeignKey(() => Product)
    @Column
    productId: string;

    @ForeignKey(() => Category)
    @Column
    categoryId: string;
}
