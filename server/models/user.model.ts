import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users',
})
export default class User extends Model {
    @Column(DataType.STRING) name: string;
    @Column(DataType.STRING) email: string;
    @Column(DataType.STRING) password: string;
    @Column(DataType.STRING) refreshToken: string;
    @Column(DataType.STRING) resetToken: string;
    @Column(DataType.ENUM('buyer', 'admin', 'seller')) role: string;
}
