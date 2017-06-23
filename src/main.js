import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Secondnavigation from './components/secondNavigation.vue'
import Search from './components/search.vue'
import OrderSearch from './components/orderSearch.vue'
import Home from './pages/home.vue'
import Show from './pages/show.vue'
import Orderlist from './pages/orderList.vue'
import Sugguestion from './pages/sugguestion.vue'
import Mylike from './pages/myLike.vue'
import Mycomment from './pages/myComment.vue'
import Recommendsearch from './pages/recommendSearch.vue'
import Subscribesearch from './pages/subscribeSearch.vue'
import Ordershow from './pages/orderShow.vue'
import Loginlist from './pages/loginList.vue'
import Phonelogin from './pages/phoneLogin.vue'

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

//这里相当于用script标签引入了js
import Slidemove from './assets/js/Slidemove.js'

//把方法设为全局方法
Vue.prototype.go=Slidemove.go;

Vue.use(VueRouter);

const routes=[
    {path: '/', components: {default:Home},name:'myhome',
        children:[
            {
                path:'',
                component:Search
            },
            {
                path:'industry/:id',
                component:Secondnavigation
            },
            {
                path:'order/:id',
                component:OrderSearch
            }
        ]},
    {path: '/show',
        components: {
            other:Show
        },
        name:'show'
    },
    {path: '/orderlist',
        components: {
            other:Orderlist
        },
        name:'orderlist'
    },
    {path: '/sugguestion',
        components: {
            other:Sugguestion
        },
        name:'sugguestion'
    },
    {path: '/mylike',
        components: {
            other:Mylike
        },
        name:'mylike'
    },
    {path: '/comment',
        components: {
            other:Mycomment
        },
        name:'comment'
    },
    {path: '/search',
        components: {
            other:Recommendsearch
        },
        name:'search'
    },
    {path: '/subscribe',
        components: {
            other:Subscribesearch
        },
        name:'subscribe'
    },
    {path: '/ordershow',
        components: {
            other:Ordershow
        },
        name:'ordershow'
    },
    {path: '/loginlist',
        components: {
            other:Loginlist
        },
        name:'loginlist'
    },
    {path: '/phonelogin',
        components: {
            other:Phonelogin
        },
        name:'phonelogin'
    }
    ];

Vue.prototype.routes=routes;
Vue.prototype.windowHeight=$(window).height();
Vue.prototype.windowWidth=$(window).width();
Vue.prototype.window=$(window);
Vue.prototype.document=$(document);
Vue.prototype.wrapper=$('html,body');

const size=parseInt($('html').css('font-size'));

Vue.prototype.init=function(){
    //html字号的初始化

    let width=$(window).width();
    if(width<750){
        let bili=width/750;
        $('html').css({
            'font-size':bili*size
        });
    }else{
        $('html').css({
            'font-size':size
        });
    }
}


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  methods:{
    demo:function(){
      alert('我是main.js里面的demo方法');
    }
  }
})



