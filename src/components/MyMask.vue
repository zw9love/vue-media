<template>
  <div class="mask" v-show="active">
    <div class="mask-text">{{msg}}</div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        active: false,
        msg:'',
        timer:null
      }
    },
    methods:{
      toggleActive(){
        this.active = true
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          this.active = false
          let action ={type: 'setMaskLock',value:false}
          this.$store.dispatch(action)
        },1000)
      }
    },
    created(){
      let action = {
        type: 'setMask',
        value: this
      }
      this.$store.dispatch(action)
    }
  }
</script>
<style src="../assets/css/style_mask.css" scoped></style>
