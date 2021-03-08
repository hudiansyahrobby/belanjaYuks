import {
    Model,
    Table,
    Column,
    DataType,
    Default,
    PrimaryKey,
    BelongsToMany,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import Product from './product.model';
import ProductCart from './productCart.model';
import User from './user.model';

@Table({
    tableName: 'carts',
    timestamps: false,
})
export default class Cart extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @ForeignKey(() => User)
    @Column(DataType.STRING)
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Product, () => ProductCart)
    products: Product[];
}
