import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// seo优化 Identifier
import MetaInfo from 'vue-meta-info'
import { MessageBox, Message, Loading, Autocomplete, Dialog, Button, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import userAvatar from '@/components/userAvatar.vue'

import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'

import '@/assets/css/main.less'

// iconpack
import { PreviewOpen, GoodTwo } from '@icon-park/vue'
// 引入样式 （整个项目只需1次）
import '@icon-park/vue/styles/index.css'

// 百度统计
var _hmt = ''
_hmt = _hmt || []
window._hmt = _hmt;
(function () {
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?ec11a31af289a2b7cfeb74773a0da5ef'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
})()

// axios
axios.defaults.withCredentials = true // axios请求携带cookie    每个都需要配置
// element
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
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
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Pagination)
Vue.component('userAvatar', userAvatar)
Vue.use(Autocomplete)

// iconpack
Vue.component('PreviewOpen', PreviewOpen)
Vue.component('GoodTwo', GoodTwo)

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
