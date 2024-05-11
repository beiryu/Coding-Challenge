import express, { Express } from 'express';
import serverless from 'serverless-http';
import winston from 'winston';
import setupConfig from './startup/config';
import setupCors from './startup/cors';
import setupDatabase from './startup/database';
import setupHelmet from './startup/helmet';
import setupLogging from './startup/logging';
import setupRoutes from './startup/routes';

const app: Express = express();

setupConfig();
setupLogging();
setupHelmet(app);
setupCors(app);
setupRoutes(app);
setupDatabase();

const port: number = +process.env.PORT! || 5000;

app.listen(port, () => winston.info(`Listening on port ${port}...`));

export const handler = serverless(app);
