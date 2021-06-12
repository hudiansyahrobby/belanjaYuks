import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import History from './history.model';
import Product from './product.model';

@Table({
    tableName: 'product-histories',
    timestamps: false,
})
export default class ProductHistory extends Model {
    @ForeignKey(() => History)
    @Column
    historyId: string;

    @ForeignKey(() => Product)
    @Column
    productId: string;

    @Column(DataType.NUMBER)
    qty: number;
}
