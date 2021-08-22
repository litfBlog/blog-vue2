import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import '@/assets/main.less'

axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.escook.cn'
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
