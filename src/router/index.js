import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/index'], resolve)
      }
    },
    {
      path: '/proms',
      name: 'proms',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/proms'], resolve)
      }
    },
    {
      path: '/gift',
      name: 'gift',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/gift'], resolve)
      }
    },
    {
      path: '/white',
      name: 'white',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/white'], resolve)
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/recommend'], resolve)
      }
    }
  ]
})

export default router
