
import express, { Express } from 'express';
import routes from './routes'
import { Database } from '../infra/orm/sequelize/index'

export const app: Express = express();

const bd = new Database()

app.use(express.json())
app.use(routes)
app.use(bd.init)
