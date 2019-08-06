const conn = require('../utils/myconn.js')

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