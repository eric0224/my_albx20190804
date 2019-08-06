const conn=require('../utils/myconn.js')

exports.getAllPosts=(obj,callback)=>{
    let sql=`select p.id,p.title,u.nickname,c.name,p.created,p.status from posts p
    join users u on p.user_id=u.id
    join categories c on p.category_id=c.id
    limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;

    conn.query(sql,(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}