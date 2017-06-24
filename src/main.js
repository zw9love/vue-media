import Vue from 'vue'
import App from './App.vue'

// Vue AJAX
import VueResource from 'vue-resource'

// 路由
import router from './router/index'

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


import $ from 'jquery'

import {myScroll,unScroll} from './tool/Scroll'


// 一些dom操作必须的对象或值
Vue.prototype.windowHeight = $(window).height()
Vue.prototype.windowWidth = $(window).width()
Vue.prototype.window = $(window)
Vue.prototype.document = $(document)
Vue.prototype.wrapper = $('html,body')
Vue.prototype.myScroll = myScroll
Vue.prototype.unScroll = unScroll



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})



