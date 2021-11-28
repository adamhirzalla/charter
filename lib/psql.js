// PG database client/connection setup
const { Pool } = require("pg");

let dbConfig = {};
if (process.env.DATABASE_URL) {
  dbConfig.connectionString = process.env.DATABASE_URL;
} else {
  dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

const db = new Pool(dbConfig);
db.connect();

module.exports = {
  query: (text, params, callback) => {
    return db.query(text, params, callback);
  },
};