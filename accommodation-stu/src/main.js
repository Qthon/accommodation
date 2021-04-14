import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import $axios from './axios'

// 富文本插件
// import './plugins/tinyMce'

// element ui
import './element'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element'
Vue.use(element)

// 公共CSS样式
import './assets/normalize.css'

// 引入Echarts ** 最新版本的eacharts引入有问题，官方建议使用老版本的
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = $axios

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
