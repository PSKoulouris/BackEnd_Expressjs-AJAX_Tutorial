//install MySQL2:
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "database": "blog",
    "password": "Stephane86!"
})

module.exports = pool;