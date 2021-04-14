import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Message } from 'element-ui'

const routes = [
  // 首页
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  // 入学须知
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../views/notice.vue')
  },
  // 老生换宿
  {
    path: '/senior',
    name: 'Senior',
    component: () => import('../views/senior.vue')
  },
  // 退宿申请
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import('../views/checkOut.vue')
  },
  // 水卡补办
  {
    path: '/watercard',
    name: 'WaterCard',
    component: () => import('../views/watercard.vue')
  },
  // 反馈
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/feedback.vue')
  },
  // 宿舍圈
  {
    path: '/forum',
    name: 'forum',
    component: () => import('../views/forum.vue')
  },
  // 个人信息
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin.vue')
  },
  // 路由重定向
  {
    path: '*',
    redirect: '/'
  },
]
const router = new VueRouter({
  routes
})

// 全局路由守卫
router.beforeEach((to, form, next) => {
  if (to.path != '/login' && !localStorage.getItem('token')) {
    Message.warning('登录失效')
    next('/login')
  } else {
    next()
  }
})

export default router
