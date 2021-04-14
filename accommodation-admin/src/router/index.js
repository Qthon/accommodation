import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search.vue'),
  },
  {
    path: '/watercard',
    name: 'Watercard',
    component: () => import('../views/watercard.vue'),
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/feedback.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/checkout.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/message.vue'),
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
