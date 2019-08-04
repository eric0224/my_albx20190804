// 引入模块
const express=require('express');
const router=require('./router.js')
// 创建服务器
const app =express();

// 绑定端口和ip
app.listen(8888,()=>{
    console.log('通过 http://127.0.0.1:8888 访问');
})

// 处理静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

// 设置ejs模板
app.set('views engine','ejs');

// 设置模板默认路径
app.set('views',__dirname+'/views');


app.use(router);