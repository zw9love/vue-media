import Vue from 'vue'
import App from './App.vue'
// Vue AJAX
import VueResource from 'vue-resource'
Vue.use(VueResource);
// 路由
import router from './router/index'
// store
import store from './store/index'

import {myScroll,unScroll} from './tool/Scroll'
// 一些dom操作必须的对象或值
Vue.prototype.myScroll = myScroll
Vue.prototype.unScroll = unScroll

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})



