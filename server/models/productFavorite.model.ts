import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import Favorite from './favorite.model';
import Product from './product.model';

@Table({
    tableName: 'product-favorites',
    timestamps: false,
})
export default class ProductFavorite extends Model {
    @ForeignKey(() => Favorite)
    @Column
    favoriteId: string;

    @ForeignKey(() => Product)
    @Column
    productId: string;
}
