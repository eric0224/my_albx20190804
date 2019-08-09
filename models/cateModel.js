const conn = require('../utils/myconn.js')

exports.getAllCate = (callback) => {
    let sql = `select * from categories`;
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results)
        }
    })
}