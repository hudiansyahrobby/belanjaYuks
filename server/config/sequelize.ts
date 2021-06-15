import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import { config } from 'dotenv';
import { parse } from 'pg-connection-string';

config();

const DB_URI = process.env.DATABASE_URL + '?ssl=no-verify';
const { database, host, password, ssl, port, user, options }: any = parse(DB_URI);

const sequelize: any = new Sequelize(DB_URI, {
    database,
    host,
    password,
    ssl,
    port,
    username: user,
    dialect: 'postgres',
    dialectOptions: {
        require: true,
        ssl: true,
        rejectUnauthorized: false,
    },
    // host: 'ec2-23-23-164-251.compute-1.amazonaws.com',
    models: [path.join(__dirname, '..', 'models', '**')],
    // query: {
    //     raw: true,
    // },
});

export default sequelize;
