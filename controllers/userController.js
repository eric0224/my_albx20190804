const userModel = require('../models/userModel.js')

// 实现登陆验证
exports.login = (req, res) => {
    let obj = req.body;
    userModel.login(obj.email, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: '服务器异常'
            })
        } else {
            if (data) {
                if (data.password == obj.password) {
                    req.session.isLogin = 'true';
                    req.session.currentUser = data;
                    res.json({
                        code: 200,
                        msg: '登陆成功'
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '密码输入错误'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '邮箱输入错误'
                })
            }
        }
    })
}