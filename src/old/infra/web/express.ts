import express, { Express } from 'express';
import routes from 'old/infra/web/routes';

export const app: Express = express();

app.use(express.json());
app.use(routes);
