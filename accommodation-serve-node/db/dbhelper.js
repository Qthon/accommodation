const { json } = require('express')
const mysql = require('mysql')
// 引入数据库配置
const databaseConfig = require('./databaseConfig')

module.exports = {
  query: function (sql, params, callback) {
    const connection = mysql.createConnection(databaseConfig)
    // 连接 Mysql 每次使用的时候需要创建链接
    connection.connect((err) => {
      // 校验是否连接成功
      if (err) {
        console.log('MySQL connect Error');
        return
      }
      connection.query(sql, params, function (err, results, fields) {
        // 去掉成功返回结果的 RowDataPacket
        // let temp = JSON.stringify(results)
        // results = JSON.parse(temp)
        // 将查询出来的结果返回给回调函数
        callback && callback(err, results, fields)
        // 关闭连接
        connection.end(function (err) {
          if (err) {
            console.log('Close database Error');
            return
          }
        })
      })
    })

  }
}
