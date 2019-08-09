const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'my_albx',
    dateStrings:true
});

module.exports = conn;