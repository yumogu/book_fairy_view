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
    }
  ]
})
