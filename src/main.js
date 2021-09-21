import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// seo优化
import MetaInfo from 'vue-meta-info'
import { MessageBox, Message, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import userAvatar from '@/components/userAvatar.vue'

import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'

// <!-- <link href="https://cdn.bootcss.com/github-markdown-css/2.8.0/github-markdown.min.css" rel="stylesheet">
// <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/github-gist.min.css" rel="stylesheet"> -->

// import '@/assets/css/github-gist.min.css'
// import '@/assets/css/github-markdown.min.css'

import '@/assets/css/main.less'

// 百度统计
var _hmt = ''
_hmt = _hmt || []
window._hmt = _hmt;
(function () {
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?8f71ac1526e720514e3a3dabad06f049'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
})()

// import '@/assets/vs2015.css'
// 指定请求的根路径
// axios.defaults.baseURL = 'http://192.168.31.189'
axios.defaults.withCredentials = true // axios请求携带cookie    每个都需要配置
// axios.defaults.withCredentials = true
// axios.defaults.withCredentials = true
// axios.defaults
// const $axios = axios.create({
//   timeout: 10000
// })
// $axios.defaults.withCredentials = true
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
// Vue.use(Button)
// Vue.use(MessageBox)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service

Vue.directive('v-loading', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(MetaInfo)

Vue.component('userAvatar', userAvatar)

// 路由跳转后，页面回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
