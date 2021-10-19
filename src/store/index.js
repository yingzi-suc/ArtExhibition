import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {user:'',role:''},
    userState: 0 //0未登录  1登陆中
  },
  mutations: {
    //保存用户信息
    saveUserInfo(state,userInfo) {
      state.userInfo = userInfo
    },
   //登录状态更改
    updateUserState(state) {
      if(state.userState === 0) {
        state.userState = 1
      } else {
        state.userState = 0
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
