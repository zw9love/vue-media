<template>
  <a href="javascript:;" @click="orderClick()">
    <div class="main_order_select" :class="{'order':orderActive}">
      <div class="icon_add">
        <span></span>
        <span></span>
      </div>
      <span v-if="orderActive">已订阅</span>
      <span v-else>&nbsp;订阅</span>
    </div>
  </a>
</template>
<script>

  export default{
    props: ['orderActive'],
    data(){
      return {

      }
    },
    methods: {
      orderClick(){
      }
    }
  }
</script>
<style src="../assets/css/style_orderCell.css" scoped></style>
