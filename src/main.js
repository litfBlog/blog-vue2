import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'

// <!-- <link href="https://cdn.bootcss.com/github-markdown-css/2.8.0/github-markdown.min.css" rel="stylesheet">
// <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/github-gist.min.css" rel="stylesheet"> -->

import '@/assets/css/github-gist.min.css'
import '@/assets/css/github-markdown.min.css'

import '@/assets/css/main.less'

// 指定请求的根路径
axios.defaults.baseURL = 'http://192.168.31.74:3000'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
