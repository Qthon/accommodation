const path = require('path')
const db = require(path.join(__dirname, '/dbhelper'))

/**
 * 根据id查询数据
 * @param {String} tabel 表名
 * @param {String} id ID
 * @returns 返回查询结果
 */
const idquery = (tabel, id) => {
  // console.log(id);
  return new Promise((resolve, reject) => {
    db.query(`select * from ${tabel} where id = ? and isdelete = 0`, [id], function (err, results, fields) {
      if (err) {
        reject({ code: 400, msg: '查询失败' })
      }
      resolve({ code: 200, data: results })
    })
  })
}

/**
 * 查询数据
 * @param {*} tabel
 * @param {*} obj
 * @returns 
 */
const paramsquery = (tabel, obj) => {
  // 拼接sql语句
  let str = ''
  let arr = []
  for (let key in obj) {
    if (obj[key]) {
      str = `${key} = '${obj[key]}'`
      arr.push(str)
    }
  }
  if (arr.length === 0) {
    return new Promise((resolve, reject) => {
      db.query(`select * from ${tabel} where isdelete = 0`, [], function (err, results, fields) {
        if (err) {
          reject({ code: 400, msg: '查询失败' })
        }
        resolve({ code: 200, data: results })
      })
    })
  }
  const sql = `select * from ${tabel} where ${arr.join(' and ')} and isdelete = 0`
  // 查询
  return new Promise((resolve, reject) => {
    db.query(sql, function (err, results, fields) {
      if (err) {
        reject({ code: 400, msg: '查询失败' })
      }
      resolve({ code: 200, data: results })
    })
  })

}

/**
 * 添加
 * @param {String} tabel
 * @param {Object} obj
 * @returns 添加成功
 */
const addData = (tabel, obj) => {
  return new Promise((resolve, reject) => {
    db.query(`insert into ${tabel} set ?`, [obj], (err, results) => {
      if (err) {
        reject({ code: 400, msg: '添加失败' })
      }
    })
    resolve({ code: 200, msg: '添加成功' })
  })
}

/**
 * 修改
 * @param {String} tabel
 * @param {Object} obj
 * @returns 修改成功
 */
const updateData = (tabel, obj) => {
  const { user_id, ...msg } = obj
  const params = Object.keys(msg)
  if (params.length === 0) {
    return ({ code: 400, msg: '修改失败' })
  }
  if (params.length === 1) {
    return new Promise((resolve, reject) => {
      db.query(`update ${tabel} set ? where id = ? and isdelete = 0`, [msg, user_id], (err, results) => {
        // console.log('results', results);
        if (err === null && results.changedRows !== 0) {
          resolve({ code: 200, msg: '修改成功' })
        }
        reject({ code: 400, msg: '修改失败' })
      })
    })
  }
  if (params.length > 1) {
    // 拼接sql语句
    let str = ''
    let arr = []
    for (let key in msg) {
      str = `${key} = '${obj[key]}'`
      arr.push(str)
    }
    let sql = `update ${tabel} set ${arr.join(',')} where id = ${user_id} and isdelete = 0`
    return new Promise((resolve, reject) => {
      db.query(sql, [msg, user_id], (err, results) => {
        if (err === null && results.changedRows !== 0) {
          resolve({ code: 200, msg: '修改成功' })
        }
        reject({ code: 400, msg: '修改失败' })
      })
    })
  }
}

/**
 * 删除
 * @param {String} tabel 
 * @param {Number} id 
 * @returns 删除成功
 */
const deleteData = (tabel, id) => {
  return new Promise((resolve, reject) => {
    db.query(`update ${tabel} set isdelete = 1 where id = ?`, [id], (err, results) => {
      if (err === null && results.changedRows !== 0) {
        resolve({ code: 200, msg: '删除成功' })
      }
      reject({ code: 400, msg: '删除失败' })
    })
  })
}

module.exports = {
  paramsquery,
  idquery,
  addData,
  updateData,
  deleteData,
}