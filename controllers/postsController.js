const postsModel = require('../models/postsModel.js');
const moment = require('moment');

// 实现文章所有页的数据
exports.getAllPosts = (req, res) => {
    let obj = req.query;
    postsModel.getAllPosts(obj, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: '获取数据失败'
            })
        } else {
            // for (let i = 0; i < data.length; i++) {
            //     data[i].created = moment(data[i].created).format('YYYY-MM-DD hh:mm:ss')
            // }
            res.json({
                code: 200,
                msg: '获取数据成功',
                data
            })
        }
    })
}