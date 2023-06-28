import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },

  {
    path: '/basic',
    name: 'basic',
    component: () => import('@/views/Basic.vue'),
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },

  {
    path: '/hook',
    name: 'hook',
    component: () => import('@/views/Hook.vue'),
  },

  {
    path: '/multi',
    name: 'multi',
    component: () => import('@/views/Multi.vue'),
  },

  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/List.vue'),
  },

  {
    path: '/anime',
    name: 'anime',
    component: () => import('@/views/Anime.vue'),
  },

  {
    path: '/router',
    name: 'router',
    component: () => import('@/views/Router.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
