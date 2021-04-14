const express = require('express')
const path = require('path')
const router = require(path.join(__dirname, '/router/router.js'))
const cors = require('cors')
const bodyParser = require('body-parser')

// 创建服务器
const app = express()
app.use(express.static('./public'))

//设置允许跨域访问该服务.
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
// });

// 调用中间件，来处理所有的POST传过来的数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 跨域
app.use(cors())

// express 路由
app.use(router)

// 监听端口
app.listen(3000, () => {
    console.log('serve http://127.0.0.1:3000 is running...');
})