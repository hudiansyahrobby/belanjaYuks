import { Table, Model, PrimaryKey, Default, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Product from './product.model';
import User from './user.model';

@Table({
    tableName: 'comments',
})
export default class Comments extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.TEXT)
    content: string;

    @Column(DataType.INTEGER)
    rating: number;

    @ForeignKey(() => User)
    @Column(DataType.UUIDV4)
    userId: any;

    @ForeignKey(() => Product)
    @Column(DataType.UUIDV4)
    productId: any;

    @BelongsTo(() => Product)
    commentedOn: Product;

    @BelongsTo(() => User)
    commentedBy: User;
}
