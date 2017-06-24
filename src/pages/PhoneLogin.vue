<template>
  <div>
    <MyTitle :title="title"></MyTitle>
    <div class="container">
      <div class="login_block1">
        <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phoneMsg">
      </div>
      <div class="login_block2">
        <input type="text" placeholder="验证码" maxlength="4" v-model="provMsg">
        <span :class="{'prov_hover':provActive}" @click="getProv()">{{msg}}</span>
      </div>
      <div class="login_sure">
        <a href="javascript:;" :class="{'hover':loginActive}">登录</a>
      </div>

      <div class="login_choose">
        <p>用其他方式登录</p>
        <ul>
          <li><a href="javascript:;"><img src="../assets/img/share_weibo.png" alt="">
            <span>微博</span></a>
          </li>
          <li><a href="javascript:;"><img src="../assets/img/share_wechat.png" alt="">
            <span>微信</span></a>
          </li>
          <li><a href="javascript:;"><img src="../assets/img/share_qq.png" alt="">
            <span>QQ</span></a>
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
      MyTitle
    },
    data(){
      return {
        title: '手机号登录',
        phoneMsg: '',
        provMsg: '',
        provActive: false,
        loginActive: false,
        lock: false,
        n: 60,
        msg: '获取验证码',
        timer: null
      }
    },
    methods: {
      phoneMsgCheck(){
        this.myCheck()
        if(this.lock) return
        let check = /^1[34578]\d{9}$/.test(this.phoneMsg)
        if(check){
          this.provActive = true
        }else{
          this.provActive = false
        }
      },

      // 正则验证
      myCheck(){
        let check1 = /^1[34578]\d{9}$/.test(this.phoneMsg)
        let check2 = ( (this.provMsg).trim().length == 4 )
        if(check1 && check2){
          this.loginActive = true
        }else{
          this.loginActive = false
        }
      },

      // 获得验证码
      getProv(){
        if(this.provActive && !this.lock){
          this.lock = true
          this.provActive = false
          this.msg = `${this.n}S`
          clearInterval(this.timer)
          this.timer = setInterval(()=>{
            this.n--
            this.msg = `${this.n}S`
            if(this.n == 0){
              clearInterval(this.timer)
              this.lock = false
              this.n = 60
            }
          },1000)
        }
      }
    },
    watch: {
      phoneMsg(){
        this.phoneMsgCheck()
      },
      provMsg(){
        this.myCheck()
      },
    }
  }
</script>
<style src="../assets/css/style_phone_login.css" scoped></style>
