import {
    Model,
    Table,
    Column,
    DataType,
    Default,
    PrimaryKey,
    BelongsToMany,
    BelongsTo,
    ForeignKey,
} from 'sequelize-typescript';
import Product from './product.model';
import ProductFavorite from './productFavorite.model';
import User from './user.model';

@Table({
    tableName: 'favorites',
    timestamps: false,
})
export default class Favorite extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @ForeignKey(() => User)
    @Column(DataType.STRING)
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Product, () => ProductFavorite)
    products: Product[];
}
