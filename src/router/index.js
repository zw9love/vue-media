import Vue from 'vue'
import Router from 'vue-router'

import Search from '../components/search.vue'
import OrderSearch from '../components/orderSearch.vue'
import Home from '../pages/home.vue'
import Show from '../pages/show.vue'
import Orderlist from '../pages/orderList.vue'
import Sugguestion from '../pages/sugguestion.vue'
import Mylike from '../pages/myLike.vue'
import Mycomment from '../pages/myComment.vue'
import Recommendsearch from '../pages/recommendSearch.vue'
import Subscribesearch from '../pages/subscribeSearch.vue'
import Ordershow from '../pages/orderShow.vue'
import Loginlist from '../pages/loginList.vue'
import Phonelogin from '../pages/phoneLogin.vue'


Vue.use(Router)

const routes = [
  {
    path: '/', components: {default: Home}, name: 'myhome',
    children: [
      {
        path: '',
        component: Search
      },
      {
        path: 'order/:id',
        component: OrderSearch
      }
    ]
  },
  {
    path: '/show',
    components: {
      other: Show
    },
    name: 'show'
  },
  {
    path: '/orderlist',
    components: {
      other: Orderlist
    },
    name: 'orderlist'
  },
  {
    path: '/sugguestion',
    components: {
      other: Sugguestion
    },
    name: 'sugguestion'
  },
  {
    path: '/mylike',
    components: {
      other: Mylike
    },
    name: 'mylike'
  },
  {
    path: '/comment',
    components: {
      other: Mycomment
    },
    name: 'comment'
  },
  {
    path: '/search',
    components: {
      other: Recommendsearch
    },
    name: 'search'
  },
  {
    path: '/subscribe',
    components: {
      other: Subscribesearch
    },
    name: 'subscribe'
  },
  {
    path: '/ordershow',
    components: {
      other: Ordershow
    },
    name: 'ordershow'
  },
  {
    path: '/loginlist',
    components: {
      other: Loginlist
    },
    name: 'loginlist'
  },
  {
    path: '/phonelogin',
    components: {
      other: Phonelogin
    },
    name: 'phonelogin'
  }
]

export default new Router({
  routes // （缩写）相当于 routes: routes
})
