import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/basic',
      name: 'basic',
      component: () => import(/* webpackChunkName: "basic" */ './views/Basic')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/hook',
      name: 'hook',
      component: () => import(/* webpackChunkName: "hook" */ './views/Hook.vue')
    }
  ]
})
