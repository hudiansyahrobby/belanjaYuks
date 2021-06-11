import { Model, Table, Column, DataType, HasOne, PrimaryKey, Default } from 'sequelize-typescript';
import Cart from './cart.model';
import Favorite from './favorite.model';
import History from './history.model';
import Shop from './shop.model';

@Table({
    tableName: 'users',
})
export default class User extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column(DataType.STRING)
    email: string;

    @Column(DataType.STRING)
    password: string;

    @Column(DataType.STRING) refreshToken: string;
    @Column(DataType.STRING) resetToken: string;

    @Column(DataType.ENUM('buyer', 'admin', 'seller'))
    role: string;

    @HasOne(() => Shop, 'userId')
    myShop: Shop;

    @HasOne(() => Cart, 'userId')
    cart: Cart;

    @HasOne(() => Favorite, 'userId')
    favorite: Favorite;

    @HasOne(() => History, 'userId')
    history: History;
}
