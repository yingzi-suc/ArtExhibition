import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/animate.css'
import fn from './assets/js/function'

// 一个轻量的处理时间和日期的javascript库
import dayjs from 'dayjs'
Vue.prototype.dayjs = dayjs

//事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$fn = fn

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
