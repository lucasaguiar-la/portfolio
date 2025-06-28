const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool(
    isProduction
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: true,
                // If a specific CA certificate is needed, uncomment the following line
                // and specify the path to the certificate file
                // ca: process.env.SSL_CA_CERT ? fs.readFileSync(process.env.SSL_CA_CERT).toString() : undefined,
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