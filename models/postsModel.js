const conn = require('../utils/myconn.js')

exports.getAllPosts = (obj, callback) => {
    let sql = `select p.id,p.title,u.nickname,c.name,p.created,p.status from posts p
    join users u on p.user_id=u.id
    join categories c on p.category_id=c.id
    where 1=1 `
    if (obj.cate && obj.cate != 'all') {
        sql += ` and p.category_id=${obj.cate}`
    }
    if (obj.statu && obj.statu != 'all') {
        sql += ` and p.status='${obj.statu}'`
    }
    sql += ` order by p.id desc limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;

    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            sql = `select count(*) cnt from posts p where 1=1 `;
            if (obj.cate && obj.cate != 'all') {
                sql += ` and p.category_id = ${obj.cate} `
            }
            if (obj.statu && obj.statu != 'all') {
                sql += ` and p.status = '${obj.statu}' `
            }
            conn.query(sql, (err1, results1) => {
                if (err1) {
                    callback(err1)
                } else {
                    callback(null, {
                        data: results,
                        total: results1[0].cnt
                    })
                }
            })
        }
    })
}