import {
    Model,
    Table,
    Column,
    DataType,
    PrimaryKey,
    Default,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
} from 'sequelize-typescript';
import Shop from './shop.model';
import ProductCategory from './productCategory.model';
import Category from './category.model';
import User from './user.model';
import ProductCart from './productCart.model';
import Cart from './cart.model';
import Favorite from './favorite.model';
import ProductFavorite from './productFavorite.model';

@Table({
    tableName: 'products',
})
export default class Product extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.NUMBER)
    quantity: number;

    @Column(DataType.ARRAY(DataType.STRING))
    images: Array<string>;

    @Column(DataType.DECIMAL(10, 2))
    price: number;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.BOOLEAN)
    isSecond: boolean;

    @ForeignKey(() => Shop)
    @Column
    shopId: string;

    @BelongsTo(() => Shop)
    seller: Shop;

    @BelongsToMany(() => Category, () => ProductCategory)
    categories: Category[];

    @BelongsToMany(() => Cart, () => ProductCart)
    carts: Cart[];

    @BelongsToMany(() => Favorite, () => ProductFavorite)
    favorites: Favorite[];
}
