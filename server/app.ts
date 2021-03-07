import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import initDB from './helpers/initDB';
import { config } from 'dotenv';

// ROUTES
import authRoute from './routes/auth.route';
import productRoute from './routes/product.route';
import shopRoute from './routes/shop.route';
import categoryRoute from './routes/category.route';

config();
const app = express();

initDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }),
);

app.use(cookieParser());

// app.use(
//   csrf({
//     cookie: {
//       httpOnly: true,
//     },
//   })
// );

app.use(compression());

app.use(helmet());

app.use(logger('dev'));

app.use('/api/v1', authRoute);
app.use('/api/v1', productRoute);
app.use('/api/v1', shopRoute);
app.use('/api/v1', categoryRoute);

// Swagger Documentatios

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecommerce App API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:8000/api/v1',
            },
        ],
    },
    apis: ['./docs/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
