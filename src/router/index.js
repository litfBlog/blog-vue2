import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pages from '@/views/Pages.vue'
import Login from '@/views/Login.vue'
import AddPage from '@/views/AddPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pages',
    name: '页面',
    component: Pages
  },
  {
    path: '/pages/:id',
    name: '页面',
    component: Pages
  },
  {
    path: '/addpage',
    name: 'add',
    component: AddPage
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
