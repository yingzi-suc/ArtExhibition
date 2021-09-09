import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    saveUsername(state,user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
