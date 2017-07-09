<template>
  <div>
    <Mytitle :title="title"></Mytitle>
    <div class="container">
      <div class="add_container" @click="goOrderSearch">
        <a href="javascript:;">
          <div class="media_search">
            <div class="bottom"></div>
            <div class="big_add">
              <div class="add">
                <span></span>
                <span></span>
              </div>
              <span>&nbsp;添加更多订阅号</span>
            </div>
          </div>
        </a>
      </div>
      <div v-for="x in orderData">
        <div class="main_order">
          <a href="javascript:;" @click="goOrderShow(x)">
            <img :src="x.src" alt="">
            <span class="num">{{x.num}}</span>
          </a>

          <div class="main_order_info">
            <p @click="goOrderShow(x)" ><a href="javascript:;">{{x.author}}</a></p>
            <p @click="goOrderShow(x)" >{{x.title}}</p>
          </div>
          <span id="time">{{x.time}}</span>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Mytitle from "../components/MyTitle.vue"
  import Mock from 'mockjs'

  export default{
    components: {
      Mytitle
    },
    data(){
      return {
        orderData: [],
        title: '我的订阅',
      }
    },
    methods: {
      goOrderShow(data){
          this.$router.push({name: 'orderShow',params:data});
      },
      goOrderSearch(){
        this.$router.push({name: 'orderSearch'});
      },
      renderOrderData(){
        let data = Mock.mock({
          'list|10': [{
            'id': '@id',
            'title': '@ctitle(6,150)',
            'author': '@cword(2,8)',
            'isOrder': '@boolean',
            'src': require('../assets/img/order.png'),
            'time': '@time("HH:mm")',
            'num|0-99': 0,
          }],
        }).list

        this.orderData = this.orderData.concat(data)
      }
    },
    mounted(){
      this.renderOrderData()
      this.myScroll(this, {data_name: 'orderData', fn_name: 'renderOrderData', num: 100})
    },
    //  当组件销毁的时候
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_myOrder.css" scoped></style>
<style src="../assets/css/style_order.css" scoped></style>
