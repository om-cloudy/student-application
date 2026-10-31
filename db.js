const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'rds-endpoint',
    user: 'admin',
    password: '******',
    database: 'student_db',
    port: 3306
});

module.exports = db;
