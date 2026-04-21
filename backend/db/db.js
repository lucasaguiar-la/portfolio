const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL || process.env.DB_URL;
const hasDatabaseUrl = Boolean(connectionString);

const pool = new Pool(
    hasDatabaseUrl
        ? {
            connectionString,
            ssl: {
                rejectUnauthorized: false,
            },
        }
    : {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }
);

module.exports = pool;