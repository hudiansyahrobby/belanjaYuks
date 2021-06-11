import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    Default,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import Cart from './cart.model';
import Category from './category.model';
import Favorite from './favorite.model';
import History from './history.model';
import ProductCart from './productCart.model';
import ProductCategory from './productCategory.model';
import ProductFavorite from './productFavorite.model';
import ProductHistory from './ProductHistory.model';
import Shop from './shop.model';

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

    @BelongsToMany(() => History, () => ProductHistory)
    checkout: History[];
}
