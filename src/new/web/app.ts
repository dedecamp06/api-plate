
import express, { Express } from 'express';
import routes from './routes'
require('../infra')

export const app: Express = express();

app.use(express.json())
app.use(routes)
