const path = require('path')
const jwt = require('jsonwebtoken')
const { idquery } = require(path.join(__dirname, '../db/dboperation'))

// 权限校验  token获取方法：req.headers.authorization
const checkToken = async (token) => {
  if (!token) {
    return ({ code: 401, msg: '缺少token' })
  }
  // 获取token
  token = token.split(" ").pop()
  let user_id
  let isError = null
  // token解密
  jwt.verify(token, "QTHON", function (err, decoded) {
    // 校验：token是否有效
    if (err) {
      isError = { code: 401, msg: '无效token' }
      return
    }
    user_id = decoded.user_id
  })
  // 校验：token无效
  if (isError) {
    return isError
  }
  // 校验：解密后的token是否能查询的到相关字段
  const data = await idquery('userinfo', user_id)
  if (data.code === 400) {
    return ({ code: 400, msg: '用户不存在' })
  }
  return ({ code: 200, msg: 'token校验通过' })
}

module.exports = {
  checkToken,
}