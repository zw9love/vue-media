<template>
  <a href="javascript:;" @click="orderClick()" >
    <div class="main_order_select" :class="{'order':active}">
      <div class="icon_add">
        <span></span>
        <span></span>
      </div>
      <span v-if="active">已订阅</span>
      <span v-else>&nbsp;订阅</span>
    </div>
  </a>
</template>
<script>

  export default{
    props: {
      orderActive:{
          default:false
      }
    },
    data(){
      return {
          active:false
      }
    },
    methods: {
      orderClick(){
        let maskLock = this.$store.getters.getMaskLock
        if(maskLock) return
        let action = {type: 'setMaskLock', value: true}
        this.$store.dispatch(action)
        this.active = !this.active
        let mask = this.$store.getters.getMask
        mask.msg = this.active ? '已添加订阅' : '已取消订阅'
        mask.toggleActive()
      }
    },
    created(){
        this.active = this.orderActive
    }
  }
</script>
<style src="../assets/css/style_orderCell.css" scoped></style>
