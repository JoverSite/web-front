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
    path: '/inline-tools',
    name: 'InlineTools',
    component: () => import('@/views/InlineTools/index.vue'),
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
  mode: undefined,
  routes,
})

export default router
