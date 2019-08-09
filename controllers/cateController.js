const cateModel = require('../models/cateModel.js')

exports.getAllCate = (req, res) => {
    cateModel.getAllCate((err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: '分类获取失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '分类获取成功',
                data
            })
        }
    })
}