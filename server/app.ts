import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
// const csrf = require("csurf");
import helmet from 'helmet';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import initDB from './helpers/initDB';

require('dotenv').config();

import authRoute from './routes/auth.route';

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

// app.all("*", (req, res) => {
//   console.log(req.headers);
//   res.cookie("XSRF-TOKEN", req.csrfToken());
// });

// app.use((req, res, next) => {
//   const csrfTokenToSendToFrontEnd = req.csrfToken();
//   console.log("csrfTokenToSendToFrontEnd: ", csrfTokenToSendToFrontEnd);
//   // this cookie must be XSRF-TOKEN, because already defined as default in Angular.
//   res.cookie("XSRF-TOKEN", csrfTokenToSendToFrontEnd);
//   next();
// });

// app.use((err, req, res, next) => {
//   // console.log(req.headers);
//   if (err.code !== "EBADCSRFTOKEN") return next(err);
//   return res.status(403).json({ message: "Invalid CSRF Token" });
// });

app.use('/api/v1', authRoute);

// app.use((err, req, res, next) => {
//   if (err.code !== "EBADCSRFTOKEN") {
//     return next(err);
//   }
//   res.status(403).json({
//     message: err,
//   });
// });

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
