/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/newline-after-import */
import * as dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';

import * as express from 'express';
import * as cors from 'cors';

import { appRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(appRoutes);

const port = +process.env.PORT!;
app.listen(port, () => console.log(`Server started on port ${port}`));
