import Vue from 'vue'
import Router from 'vue-router'

import Search from '../components/search.vue'
import OrderSearch from '../components/orderSearch.vue'
import Home from '../pages/home.vue'
import Show from '../pages/show.vue'
import MyOrder from '../pages/MyOrder.vue'
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
    path: '/', components: {default: Home}, name: 'home',
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
      default: Show
    },
    name: 'show'
  },
  {
    path: '/myOrder',
    components: {
      default: MyOrder
    },
    name: 'orderlist'
  },
  {
    path: '/sugguestion',
    components: {
      default: Sugguestion
    },
    name: 'sugguestion'
  },
  {
    path: '/mylike',
    components: {
      default: Mylike
    },
    name: 'mylike'
  },
  {
    path: '/comment',
    components: {
      default: Mycomment
    },
    name: 'comment'
  },
  {
    path: '/search',
    components: {
      default: Recommendsearch
    },
    name: 'search'
  },
  {
    path: '/subscribe',
    components: {
      default: Subscribesearch
    },
    name: 'subscribe'
  },
  {
    path: '/ordershow',
    components: {
      default: Ordershow
    },
    name: 'ordershow'
  },
  {
    path: '/loginlist',
    components: {
      default: Loginlist
    },
    name: 'loginlist'
  },
  {
    path: '/phonelogin',
    components: {
      default: Phonelogin
    },
    name: 'phonelogin'
  }
]

export default new Router({
  routes // （缩写）相当于 routes: routes
})
