import dotenv from 'dotenv';

dotenv.config();

export const dbConfig: any = {
    dialect: 'postgres',
    host: process.env.SQL_HOST,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_NAME,
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
            requestTimeout: 300000,
        },
    },
}
