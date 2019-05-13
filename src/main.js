// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XInput, Group, Cell, XHeader } from 'vux'

Vue.component('x-header', XHeader)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('x-input', XInput)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
