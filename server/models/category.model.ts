import {
    Model,
    Table,
    Column,
    DataType,
    Default,
    PrimaryKey,
    BelongsToMany,
    BeforeCreate,
    BeforeUpdate,
} from 'sequelize-typescript';
import Product from './product.model';
import ProductCategory from './productCategory.model';

@Table({
    tableName: 'categories',
})
export default class Category extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.ARRAY(DataType.STRING))
    images: Array<string>;

    @BelongsToMany(() => Product, () => ProductCategory)
    products: Product[];

    @BeforeCreate
    @BeforeUpdate
    static makeLowerCase(instance: Category) {
        // this will be called when an instance is created or updated
        instance.name = instance.name.toLowerCase();
    }
}
