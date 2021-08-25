import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import '@/assets/main.less'
import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'

// 指定请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
