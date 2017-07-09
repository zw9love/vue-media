<template>
  <div>
    <MyMask></MyMask>
    <TitleSearch :placeholder="'搜索尚阅号'"></TitleSearch>
    <div class="container">
      <!--<Mask></Mask>-->
      <div class="order_container">
        <div v-for="x in orderData">
          <div class="main_order">
            <a href="javascript:;" @click="goOrderShow(x)" ><img :src="x.src" alt=""></a>
            <div class="main_order_info" :style="specialStyle">
              <p @click="goOrderShow(x)" ><a href="javascript:;">{{x.author}}</a></p>
              <p @click="goOrderShow(x)" >简介：{{x.title}}</p>
            </div>
            <OrderCell :orderActive="x.isOrder"></OrderCell>
          </div>
          <div class="line"></div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  import OrderCell from '../components/OrderCell.vue'
  import TitleSearch from '../components/TitleSearch.vue'
  import MyMask from '../components/MyMask.vue'
  import Mock from 'mockjs'
  export default{
    components: {
      OrderCell,
      TitleSearch,
      MyMask
    },
    data(){
      return {
        specialStyle: {},
        orderData: [],
      }
    },
    methods: {
      goOrderShow(data){
        this.$router.push({name: 'orderShow',params:data});
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
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_order.css" scoped></style>
<style src="../assets/css/style_orderSearch.css" scoped></style>
