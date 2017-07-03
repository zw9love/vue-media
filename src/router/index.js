import Vue from 'vue'
import Router from 'vue-router'

import GoRecommendSearch from '../components/GoRecommendSearch.vue'
import GoOrderSearch from '../components/GoOrderSearch.vue'
import GoIndustryNav from '../components/GoIndustryNav.vue'
import Home from '../pages/Home.vue'
import Show from '../pages/Show.vue'
import MyOrder from '../pages/MyOrder.vue'
import Sugguestion from '../pages/Sugguestion.vue'
import MyLike from '../pages/MyLike.vue'
import Mycomment from '../pages/MyComment.vue'
import RecommendSearch from '../pages/RecommendSearch.vue'
import OrderSearch from '../pages/OrderSearch.vue'
import Ordershow from '../pages/OrderShow.vue'
import Loginlist from '../pages/LoginList.vue'
import Phonelogin from '../pages/PhoneLogin.vue'


Vue.use(Router)

const routes = [
  {
    path: '/', components: {default: Home}, name: 'home',
    children: [
      {
        path: '',
        component: GoRecommendSearch,
        name: 'default',
      },
      {
        path: '/order',
        component: GoOrderSearch,
        name: 'order',
      },
      {
        path: '/industry',
        component: GoIndustryNav,
        name: 'industry',
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
    name: 'myOrder'
  },
  {
    path: '/sugguestion',
    components: {
      default: Sugguestion
    },
    name: 'sugguestion'
  },
  {
    path: '/myLike',
    components: {
      default: MyLike
    },
    name: 'myLike'
  },
  {
    path: '/myComment',
    components: {
      default: Mycomment
    },
    name: 'myComment'
  },
  {
    path: '/recommendSearch',
    components: {
      default: RecommendSearch
    },
    name: 'recommendSearch'
  },
  {
    path: '/orderSearch',
    components: {
      default: OrderSearch
    },
    name: 'orderSearch'
  },
  {
    path: '/orderShow',
    components: {
      default: Ordershow
    },
    name: 'orderShow'
  },
  {
    path: '/loginList',
    components: {
      default: Loginlist
    },
    name: 'loginList'
  },
  {
    path: '/phoneLogin',
    components: {
      default: Phonelogin
    },
    name: 'phoneLogin'
  }
]

export default new Router({
  routes // （缩写）相当于 routes: routes
})
