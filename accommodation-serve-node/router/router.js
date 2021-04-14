const express = require('express')
const path = require('path')
// express 路由中间件
const router = express.Router()
// 创建Token
const jwt = require('jsonwebtoken')
// 加密
const bcrypt = require('bcryptjs')
// 引入数据库操作
const dboperation = require(path.join(__dirname, '../db/dboperation'))
// 权限校验
const { checkToken } = require(path.join(__dirname, '../untils/common'))
// 解析表单
const formidable = require('formidable')

/**
 * 1、登录
 * Method：POST
 * @param {String} user_id【必】
 * @param {String} password【必】
 * @param {String} role
 */
router.post('/api/user/login', async (req, res) => {
  const { user_id, password, role } = req.body
  // 校验：用户是否存在
  let isExist = await dboperation.paramsquery('userinfo', { user_id, role })
  // 查询失败
  if (isExist.code === 400) {
    res.send(isExist)
    return
  }
  // 校验用户是否存在
  if (isExist.data.length === 0) {
    res.send({ code: 400, msg: '用户不存在' })
    return
  }
  // 密码校验 + 生成Token
  bcrypt.compare(password, isExist.data[0].password, function (err, success) {
    // console.log(success);
    if (!success) {
      res.send({ code: 400, msg: '密码输入错误' })
      return
    }
    // 生成Token
    const token = jwt.sign({ user_id }, 'QTHON')
    res.send({ code: 200, token })
  })
})

/**
 * 2、添加学生登录信息
 * Method：POST
 * @param {String} user_id【必】
 * @param {String} password【必】
 * @param {String} authorization 【必】
 */
router.post('/api/admin/register', async (req, res) => {
  // token校验
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  const { user_id, password } = req.body
  // 校验：学生是否存在
  let isExist = await dboperation.idquery('userinfo', user_id)
  // 查询失败
  if (isExist.code === 400) {
    res.send(isExist)
    return
  }
  if (isExist.data.length !== 0) {
    res.send({ code: 400, msg: `用户 ${user_id} 已存在` })
    return
  }
  // 密码加密
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        console.log('加密失败')
        return
      }
      // 添加注册信息
      let isSave = await dboperation.addData('userinfo', { id: user_id, user_id, password: hash })
      res.send(isSave)
    })
  })
})

/**
 * 3、添加学生基础信息
 * Method：POST
 * 需权限校验
 * @param {String} user_id【必】学号
 * @param {String} realname【必】真实姓名
 * @param {String} nickname【可选】呢称
 * @param {String} gender【必】性别
 * @param {String} class【必】班级
 * @param {String} telphone【必】联系方式
 * @param {String} institution【必】学院
 * @param {String} profession【可选】专业
 * @param {String} grade【必】入学年份
 */
router.post('/api/admin/insert', async (req, res) => {
  // token 权限校验
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  // 校验：该信息是否已经存在
  let isExist = await dboperation.idquery('stu_msg', req.body.user_id)
  // 查询失败
  if (isExist.code === 400) {
    res.send(isExist)
    return
  }
  if (isExist.data.length !== 0) {
    res.send({ code: 400, msg: '用户已存在' })
    return
  }
  // 注册信息
  let result = await dboperation.addData('stu_msg', { id: req.body.user_id, ...req.body })
  res.send(result)
})

/**
 * 4、获取学生基本信息
 * Method：GET
 * @param {String} user_id【可选】学号
 * 需要权限校验
 */
router.get('/api/admin/getinfo', async (req, res) => {
  // token 权限校验
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  // 查询
  let save = await dboperation.paramsquery('stu_msg', req.query)
  if (save.data.length === 0) {
    res.send({ code: 400, msg: '用户不存在' })
  }
  res.send(save)
})

/**
 * 5、修改学生基础信息
 * Mehond：POST
 * @param {String} user_id【必】学号
 * @param {String} realname【可】真实姓名
 * @param {String} nickname【可】呢称
 * @param {String} gender【可】性别
 * @param {String} class【可】班级
 * @param {String} telphone【可】联系方式
 * @param {String} institution【可】学院
 * @param {String} profession【可】专业
 * @param {String} grade【可】入学年份
 * 需要权限校验
 */
router.post('/api/admin/update', async (req, res) => {
  // 权限控制
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  // 校验该用户是否存在
  let isExist = await dboperation.idquery('stu_msg', req.body.user_id)
  // console.log('isExist', isExist);
  // 查询失败
  if (isExist.code === 400) {
    res.send(isExist)
    return
  }
  if (isExist.data.length === 0) {
    res.send({ code: 400, msg: '该用户不存在' })
    return
  }
  let result = await dboperation.updateData('stu_msg', req.body)
  res.send(result)
})

/**
 * 6、删除学生信息
 * Method:GET
 * @param {String} user_id【必】学号
 * 需要权限校验
 */
router.get('/api/admin/deleteInfo', async (req, res) => {
  // 权限控制
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  // 校验该用户是否存在
  let isExist = await dboperation.idquery('stu_msg', req.query.user_id)
  // 查询失败
  if (isExist.code === 400) {
    res.send(isExist)
    return
  }
  if (isExist.data.length === 0) {
    res.send({ code: 400, msg: '用户不存在' })
    return
  }
  // 删除
  let result = await dboperation.deleteData('stu_msg', req.query.user_id)
  res.send(result)
})

/**
 * 7、图片上传
 * Method:POST
 * @param {FormData} 【必】
 * 需要权限校验
 */
router.post('/api/user/upload', async (req, res) => {
  // 权限控制
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  // 1、创建表单创建对象
  const form = new formidable.IncomingForm()
  // 2、配置文件上传文件的存放位置
  form.uploadDir = path.join(__dirname, '../public/uploads')
  // 3、保留上传文件后缀
  form.keepExtensions = true
  // 4、解析表单
  form.parse(req, (err, fields, files) => {
    // console.log('files.file.path', files.file.path);
    if (err) {
      res.send({ code: 400, msg: '上传失败' })
    }
    let path = files.file.path.split('public').pop()
    res.send({ code: 200, msg: '上传成功', path })
  })
})

/**
 * 8、获取宿舍信息
 * Method:GET
 * @param {towerNum} 【可】
 * @param {roomNum} 【可】
 * @param {bedNum} 【可】
 * @param {electricity} 【可】
 * @param {truename} 【可】
 * @param {user_id} 【可】
 * 需要权限校验
 */
router.get('/api/user/getDormInfo', async (req, res) => {
  // 权限控制
  const auth = await checkToken(req.headers.authorization)
  if (auth.code !== 200) {
    res.send(auth)
    return
  }
  const result = await dboperation.paramsquery('dorminfo', req.query)
  res.send(result)
})


module.exports = router