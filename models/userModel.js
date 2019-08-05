const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'my_albx'
});


// 实现登陆验证
exports.login = (email, callback) => {
    let sql = `select * from users where email='${email}'`;
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results[0]);
        }
    })
}