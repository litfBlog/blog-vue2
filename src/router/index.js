import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pages from '@/views/Pages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pages/:id',
    name: '页面',
    component: Pages
  }
]

const router = new VueRouter({
  routes
})

export default router
