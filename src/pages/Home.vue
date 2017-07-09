<template>
  <div style="overflow: hidden;">
    <!--侧边栏lol-->
    <div class="aside" :class="{'go_aside':asideActive}" :style="asideStyle">
      <div class="login_head">
        <a href="javascript:;" @click="goLogin" ><img src="../assets/img/login.png" alt=""></a>
        <span><a href="javascript:;" @click="goLogin" >点击登录</a></span>
      </div>
      <ul>
        <div v-for="(x,index) in asideData">
          <a :href="x.href" @click="asideClick(index)" >
            <li>
              <img :src="x.src" alt="">
              <span>{{x.name}}</span>
            </li>
          </a>
          <div class="line"></div>
        </div>
      </ul>
    </div>
    <!--退出shadow-->
    <MyShadow :title="shadowTitle"></MyShadow>
    <!--main内容块-->
    <div class="container" :class="{'go_contain':asideActive}" style="margin:0 auto;">
      <!--阴影块-->
      <div class="contain_shadow" :class="{'go_shadow':asideActive}" @click="moreInfoClick(false)" ></div>
      <!--一级导航-->
      <div class="header_contain">
        <header class="media_header">
          <a href="javascript:;" @click="moreInfoClick(true)" ><img src="../assets/img/nav.png" alt=""></a>
          <div class="media_header_info" id="wrapper">
            <ul id="scroller" class="scrollbar">
              <li v-for="(x,index) in firstNavData" @click="firstClick(x,index)" >
                <a href="javascript:;" :class="{'current': activeIndex == index}">{{x.name}}</a>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <!--二级导航-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--主要内容块-->
      <section class="media_info">
        <div class="main-data" v-for="x in recommendData">
          <div class="main-cell" v-for="(y,index) in x.list">
            <div v-if="index < 3">
              <Recommend :data="y"></Recommend>
            </div>
            <div v-else :data="y">
              <BigRecommend :data="y"></BigRecommend>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery'
  import IScroll from 'iscroll'
  import Mock from 'mockjs'
  import Recommend from '../components/Recommend.vue'
  import BigRecommend from '../components/BigRecommend.vue'
  import MyShadow from '../components/MyShadow.vue'


  export default{
    components: {
      Recommend,
      BigRecommend,
      MyShadow
    },
    data(){
      return {
        shadowTitle: '是否确定退出？',
        asideStyle: {},
        asideActive: false,
        activeIndex: 0,
        firstNavData: [],
        secondNavData: [],
        asideData: [
          {href: '#/myOrder', src: require('../assets/img/myorder.png'), name: '我的订阅'},
          {href: '#/myLike', src: require('../assets/img/star.png'), name: '我的收藏'},
          {href: '#/myComment', src: require('../assets/img/fix_msg.png'), name: '我的评论'},
          {href: '#/sugguestion', src: require('../assets/img/suggestion.png'), name: '意见反馈'},
          {href: 'javascript:;', src: require('../assets/img/quit.png'), name: '退出',}
        ],
        recommendData: []
      }
    },
    methods: {
      asideClick(index){
        if (index == this.asideData.length - 1) {
          let shadowTarget = this.$store.getters.getShadowTarget
          console.log(shadowTarget)
          shadowTarget.shadowActive = true
        }
      },
      goLogin(){
        this.$router.push({name: 'loginList'})
      },
      // 点击显示侧边栏内容
      moreInfoClick(val){
        if(this.asideActive == val)  return

        let scrollTop = $(window).scrollTop()
        this.asideStyle = {'top': scrollTop + 'px'}

        if (this.asideActive) {
          clearInterval(this.timer)
          this.timer = setTimeout(() => {
            $('body').removeClass('body')
            $('html').removeClass('html')
          }, 800)
        } else {
          $('body').addClass('body')
          $('html').addClass('html')
        }

        this.asideActive = val
      },
      // 一级导航点击事件
      firstClick(data, index){
        if (this.activeIndex == index) return
        switch(index){
          case 1:
            this.$router.push({name: 'industry'})
            break
          case 2:
            this.$router.push({name: 'order'})
            break
          default:
            this.$router.push({name: 'default'})
        }
//        index == 2 ? this.router.navigate(['order']) : this.router.navigate([''])
        this.activeIndex = index
        this.recommendData = []
        this.renderRecommendData()
      },
      renderFirstNavData(){
        this.firstNavData = Mock.mock({
          'list|30': [{
            'name': '@cword(2, 5)',
          }],
        }).list
      },
      renderRecommendData(){
        let data = Mock.mock({
          'list|3': [{
            'list|4': [
              {
                'id': '@id',
                'title': '@ctitle(6,50)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'eye_num|0-999': 0,
                'isMovie': '@boolean',
                'isOrder': '@boolean',
                'time': '@datetime("yyyy-MM-dd")',
                'src': '../assets/img/order.png',
                'infoData|1-5': [{
                  'info': '@cparagraph()',
                  'src': require('../assets/img/show_1.jpg')
//                  'src': '../assets/img/show_' + '@integer(1, 3)' + '.jpg'
                }]
              },
            ]
          }],
        }).list

        this.recommendData = this.recommendData.concat(data)
//        console.log(JSON.stringify(this.recommendData, null, 4))
      },
    },
    mounted(){
      $('body').removeClass('body')
      $('html').removeClass('html')
      this.renderRecommendData()
      this.renderFirstNavData()
      this.myScroll(this, {data_name: 'recommendData', fn_name: 'renderRecommendData', num: 20})
      this.$router.push({name: 'default'})
//      new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true })
    },
    //  当组件销毁的时候
    destroyed(){
      $('body').removeClass('body')
      $('html').removeClass('html')
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_home.css" scoped></style>
