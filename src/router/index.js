import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pages from '@/views/Pages.vue'
import Login from '@/views/Login.vue'
import Editdoc from '@/views/Editdoc.vue'
import Admin from '@/views/Admin.vue'
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
    path: '/admin',
    name: '后台管理',
    component: Admin
  },
  {
    path: '/p/:pages',
    name: '页面',
    component: Pages
  }
]

const router = new VueRouter({
  base: 'test', // 如果项目项目在 域名 根据目录下，则去掉这行
  mode: 'history',
  routes
})

export default router
