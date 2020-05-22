import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog/index.vue'),
  }, {
    path: '/earth',
    name: 'Earth',
    component: () => import('@/views/Earth/index.vue'),
  }, {
    path: '/window',
    name: 'Window',
    component: () => import('@/views/Window/index.vue'),
  }, {
    path: '/404',
    name: '404',
    component: () => import('@/views/ThrowPages/NotFound/index.vue'),
  }, {
    path: '*',
    redirect: { name: '404' },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
