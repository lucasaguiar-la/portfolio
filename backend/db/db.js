const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DB_URL;

const pool = new Pool({
    host: process.env.NEON_HOST,
    user: process.env.NEON_USER,
    password: encodeURIComponent(process.env.NEON_PASSWORD),
    database: process.env.NEON_NAME,
    ssl: {
      rejectUnauthorized: false,
    },
  });

module.exports = pool;