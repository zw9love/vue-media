<template>
  <div class="shadow" v-show="shadowActive" :style="shadowStyle">
    <div class="model">
      <p>{{title}}</p>
      <div>
        <button class="cancel" @click="cancel()">取消</button>
        <button class="sure" @click="sure()" >确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    data(){
      return {
        shadowActive: false,
        shadowStyle: {}
      }
    },
    props: ['title'],
    methods: {
      cancel(){
        this.shadowActive = !this.shadowActive
      },
      sure(){
        this.shadowActive = !this.shadowActive
        let editTarget = this.$store.getters.getEditTarget
        if(editTarget){
          editTarget.sureDelete()
        }
      },
    },
    mounted(){
      this.shadowStyle = {width:'600px',height:$(window).height() + 'px'}
      let action = {
        type: 'setShadowTarget',
        value: this
      }
      this.$store.dispatch(action)
    }
  }
</script>
