'use strict';

const dotenv = require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_USER,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  },
  production: {
    dialect: 'mysql'
  }
};