const mysql = require('mysql2');
require('dotenv').config();
const {promisify} = require('util');


const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
});

console.log(`successfully connected to ${process.env.DB_NAME} on mySQL server.`);
exports.promisifedQuery = promisify(connection.query).bind(connection);