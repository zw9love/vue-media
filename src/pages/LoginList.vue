<template>
  <div>
    <MyTitle :title="title"></MyTitle>
    <div class="login_choose">
      <div class="choose_container">
        <ul>
          <li><a href="javascript:;"><img src="../assets/img/share_weibo.png" alt="">
            <span>微信</span></a>
          </li>
          <li><a href="javascript:;"><img src="../assets/img/share_wechat.png" alt="">
            <span>微信</span></a>
          </li>
          <li><a href="javascript:;"><img src="../assets/img/share_qq.png" alt="">
            <span>微信</span></a>
          </li>
          <li @click="goPhoneLogin"><a href="javascript:;"><img src="../assets/img/share_phone.png" alt="">
            <span>手机号</span></a>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>
<script>
  import MyTitle from '../components/MyTitle.vue'
  export default{
    components: {
      MyTitle,
    },
    data(){
      return {
        title: '选择登录方式'
      }
    },
    methods: {
      goPhoneLogin(){
          this.$router.push({name:'phoneLogin'})
      }
    }
  }
</script>
<style src="../assets/css/style_login.css" scoped></style>
