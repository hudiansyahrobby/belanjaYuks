import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'products',
})
export default class Product extends Model {
    @Column(DataType.STRING) name: string;
    @Column(DataType.NUMBER) quantity: number;
    @Column(DataType.ARRAY(DataType.STRING)) images: Array<string>;
    @Column(DataType.STRING) price: number;
    @Column(DataType.TEXT) description: string;
    @Column(DataType.BOOLEAN) isSecond: boolean;
}
