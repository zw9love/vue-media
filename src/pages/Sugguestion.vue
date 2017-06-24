<template>
  <div class="container">
    <MyTitle :title="title"></MyTitle>
    <div class="sugguest_info" style="margin-top:20px;">
      <textarea name="" id="" placeholder="请留下您的宝贵意见..." v-model="sugguestMsg"></textarea>
    </div>
    <div class="sugguest_phone">
      <!--maxlength="11"-->
      <input type="text" placeholder="联系方式：QQ、邮箱或手机" v-model="concatMsg">
    </div>

    <p class="staff">您的联系方式有助于我们沟通和解决问题，仅工作人员可见</p>

    <button class="commit" :class="{'hover':active}">提交</button>
  </div>
</template>
<script>
  import MyTitle from '../components/MyTitle.vue'

  export default{

    components: {
      MyTitle
    },
    data(){
      return {
        title: '意见反馈',
        active: false,
        sugguestMsg: '',
        concatMsg: ''
      }
    },
    methods: {
      myCheck(){
        let check1 = /^1[34578]\d{9}$/.test(this.concatMsg)
        let check2 = /^[1-9][0-9]{4,9}$/.test(this.concatMsg)
        let check3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.concatMsg)
        let check = check1 || check2 || check3
        if (this.sugguestMsg && check) {
          this.active = true
        } else {
          this.active = false
        }
      }
    },
    watch: {
      sugguestMsg(){
        this.myCheck()
      },
      concatMsg(){
        this.myCheck()
      }
    }
  }
</script>
<style src="../assets/css/style_sugguestion.css" scoped></style>
