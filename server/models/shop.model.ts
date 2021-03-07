import {
    Model,
    Table,
    Column,
    DataType,
    BelongsTo,
    ForeignKey,
    Default,
    HasMany,
    PrimaryKey,
    BeforeCreate,
    BeforeFind,
} from 'sequelize-typescript';
import Product from './product.model';
import User from './user.model';

@Table({
    tableName: 'shops',
})
export default class Shop extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.ARRAY(DataType.STRING))
    images: Array<string>;

    // @Default(0)
    // @Column(DataType.NUMBER)
    // rating: number;

    @Column(DataType.TEXT)
    description: string;

    @ForeignKey(() => User)
    @Column
    userId: string;

    @BelongsTo(() => User)
    owner: User;

    @HasMany(() => Product, 'shopId')
    products: Product[];
}
