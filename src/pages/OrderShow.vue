<template>
  <div>
    <div class="page_header">
      <div class="back" @click="goBack()" >
        <img src="../assets/img/back.png" alt="">
      </div>
      <img src="../assets/img/page.png" alt="">
      <div class="order-cell">
        <OrderCell :orderActive="orderData.isOrder"></OrderCell>
      </div>
    </div>

    <MyMask></MyMask>

    <div class="container">

      <div class="page_explain">
        <p class="page_title">{{orderData.author}}</p>
        <p class="page_info">{{orderData.title}}</p>
      </div>
      <div class="line"></div>

      <Recommend :data="x" v-for="x in recommendData"></Recommend>
    </div>

  </div>
</template>
<script>
  import Recommend from '../components/Recommend.vue'
  import OrderCell from '../components/OrderCell.vue'
  import MyMask from '../components/MyMask.vue'
  import Mock from 'mockjs'
  export default{
    components: {
      Recommend,
      OrderCell,
      MyMask
    },
    data(){
      return {
        recommendData: [],
        orderData:{}
      }
    },
    methods: {
      goBack(){
        this.$router.back()
      },
      renderOrderData(){
        this.orderData = this.$route.params
      },
      renderRecommendData(){
        let data = Mock.mock({
          'list|5': [{
            'id':'@id',
            'title': '@ctitle(6,50)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'eye_num|0-999': 0,
            'isMovie': '@boolean',
            'isOrder': '@boolean',
            'time':'@datetime("yyyy-MM-dd")',
            'src':'../assets/img/order.png',
            'infoData|1-5':[{
              'info':'@cparagraph()',
              'src':require('../assets/img/show_3.jpg')
            }]
          }],
        }).list

        this.recommendData = this.recommendData.concat(data)
      }
    },
    mounted(){
      this.renderOrderData()
      this.renderRecommendData()
      this.myScroll(this, {data_name: 'recommendData', fn_name: 'renderRecommendData', num: 100})
    },
    //  当组件销毁的时候
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_orderShow.css" scoped></style>
