import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pages from '@/views/Pages.vue'
import Login from '@/views/Login.vue'
import Editdoc from '@/views/Editdoc.vue'
import Admin from '@/views/Admin.vue'
import Register from '@/views/Register.vue'
import User from '@/views/User.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import Search from '@/views/Search.vue'
import Page404 from '@/components/404/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'add',
    component: Editdoc
  },
  {
    path: '/edit/:pages',
    name: 'edit',
    component: Editdoc
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    component: Register
  },
  {
    path: '/user',
    name: '用户',
    component: User
  },
  {
    path: '/ResetPassword',
    name: '重置密码',
    component: ResetPassword
  },
  {
    path: '/admin',
    name: '后台管理',
    component: Admin
  },
  {
    path: '/p/:pages',
    name: '页面',
    component: Pages
  },
  {
    path: '/search',
    name: '搜索',
    component: Search
  },
  {
    path: '*',
    name: '404',
    component: Page404
  }
]

const router = new VueRouter({
  // base: 'test', // 如果项目项目在 域名 根据目录下，则去掉这行
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})

export default router
