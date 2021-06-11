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
import Product from './product.model';
import ProductHistory from './ProductHistory.model';
import User from './user.model';

@Table({
    tableName: 'histories',
    timestamps: true,
})
export default class History extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @ForeignKey(() => User)
    @Column(DataType.STRING)
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Product, () => ProductHistory)
    products: Product[];
}
