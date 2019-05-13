import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login-regist'
    }, {
      path: '/login-regist',
      name: 'login-regist',
      component: () => import(/* webpackChunkName: "login_regist" */ '@/view/login_regist')
    }, {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ '@/view/my')
    }, {
      path: '/my/userCenter',
      name: 'userCenter',
      component: () => import(/* webpackChunkName: "my" */ '@/view/my/userCenter')
    }, {
      path: '/my/aboutUs',
      name: 'aboutUs',
      component: () => import(/* webpackChunkName: "my" */ '@/view/my/aboutUs')
    }, {
      path: '/my/readRecord',
      name: 'readRecord',
      component: () => import(/* webpackChunkName: "my" */ '@/view/my/readRecord')
    }
  ]
})
