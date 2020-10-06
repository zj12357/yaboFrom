// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { get, post } from './JS/ajax'
import utils from './JS/utils'
import MintUI from 'mint-ui'
import './mock/mock.js'
import 'mint-ui/lib/style.css'
import VueElementLoading from 'vue-element-loading'

import VueScroller from 'vue-scroller'
Vue.component('VueElementLoading', VueElementLoading)
Vue.use(VueScroller)
Vue.use(VueElementLoading)
Vue.use(utils)
Vue.use(MintUI)
// Vue.use(vConsole)
Vue.prototype.$axios = { get, post }

Vue.config.productionTip = false
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
