<template>
    <div>
        <mytitle title="" :isActive="false" :justback="true"></mytitle>
        <div class="shadow">
            <div class="model">
                <p>手机号码有误!!!</p>
                <div>
                    <button class="sure">确定</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="login_block1">
                <input type="text" placeholder="请输入手机号" maxlength="11" v-model="msg1">
            </div>
            <div class="login_block2">
                <input type="text" placeholder="验证码" maxlength="4" v-model="msg2">
                <span :style="verificationCode" @click="get">{{name}}</span>
            </div>
            <div class="login_sure">
                <a href="javascript:;" :class="{hover:isactive}">登录</a>
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
    import Mytitle from '../components/mytitle.vue'

    export default{
        components: {
            Mytitle
        },
        methods: {
            get(){
                if (this.flag) {
                    this.flag = false;
                    this.islock = true;
                    this.verificationCode = {};
                    this.name = this.num + 'S';
                    let self = this;
                    clearInterval(this.timer)
                    this.timer = setInterval(function () {
                        self.num--;
                        if (self.num < 0) {
                            clearInterval(self.timer)
                            self.name = '重新获取验证码'
                            self.verificationCode = {
                                border: '1px solid #e92230',
                                color: '#e92230'
                            }
                            self.islock = false;
                            self.flag = true;
                            self.num = 60;
                        } else {
                            self.name = self.num + 'S';
                        }
                    }, 1000)
                }
            }
        },
        data(){
            return {
                verificationCode: {},
                flag: false,
                name: '获取验证码',
                num: 60,
                timer: null,
                msg1: '',
                msg2: '',
                isactive: false,
                islock: false,
                check1:false,
                check2:false,
            }
        },
        watch: {
            msg1(newval, oldval){
                this.check1 = /^1[34578]\d{9}$/.test(newval)
                this.isactive = (this.check1 && this.check2) ? true : false;
                if (!this.check1) {
                    this.verificationCode = {};
                    this.flag = false;
                } else {
                    if (this.islock) return;
                    this.verificationCode = {
                        border: '1px solid #e92230',
                        color: '#e92230'
                    }
                    this.flag = true
                }
            },
            msg2(newval, oldval){

                this.check2 = ( newval.trim().length == 4 )

                this.isactive = (this.check1 && this.check2) ? true : false;
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_phone_login.css" scoped></style>