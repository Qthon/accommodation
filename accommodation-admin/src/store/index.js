import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numMessage: 0, // 消息数量
  },
  mutations: {
    // 消息数量变化
    changeNumMessage(state,num){
      state.numMessage = num
    }
  },
  actions: {
  },
  modules: {
  }
})
