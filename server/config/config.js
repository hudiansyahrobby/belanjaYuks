const { config } = require('dotenv');
const { parse } = require('pg-connection-string');

config();

const env = process.env;
const DB_URI = process.env.DATABASE_URL + '?ssl=no-verify';
const { database, host, password, ssl, port, user, options } = parse(DB_URI);

module.exports = {
    development: {
        use_env_variable: DB_URI,
        url: DB_URI,
        database,
        host,
        password,
        ssl,
        port,
        username: user,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: false,
                rejectUnauthorized: false,
            },
        },
    },
    test: {
        username: env.POSTGRES_USERNAME_TEST,
        password: env.POSTGRES_PASSWORD_TEST,
        database: env.POSTGRES_DATABASE_TEST,
        host: 'db',
        dialect: 'postgres',
        logging: false,
    },
    production: {
        use_env_variable: DB_URI,
        url: DB_URI,
        database,
        host,
        password,
        ssl,
        port,
        username: user,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: false,
                rejectUnauthorized: false,
            },
        },
    },
};
