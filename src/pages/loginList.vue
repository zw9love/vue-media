<template>
    <div>
        <mytitle title="" :isActive="false"></mytitle>
        <div class="login_choose">
            <p>选择登录方式</p>
            <div class="choose_container">
                <ul>
                    <temp v-for="(x,index) in list" :data="x" :index="index"></temp>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    const Temp={
        template:'<li @click="jump"><a href="javascript:;"><img :src="data.src" alt=""><span>{{data.name}}</span></a></li>',
        props:['data','index'],
        methods:{
            jump(){
                if(this.index==3){
                    this.$router.push({name:'phonelogin'});
                }
            }
        }
    }
    import Mytitle from '../components/mytitle.vue'
    export default{
        components:{
            Mytitle,
            Temp
        },
        created(){
            this.wrapper.css({
                height:'100%'
            });
        },
        destroyed(){
            this.wrapper.css({
                height:'auto'
            });
        },
        data(){
            return{
                list:[
                    {name:'微博',src:'http://localhost:8080/src/assets/img/share_weibo.png'},
                    {name:'微信',src:'http://localhost:8080/src/assets/img/share_wechat.png'},
                    {name:'QQ',src:'http://localhost:8080/src/assets/img/share_qq.png'},
                    {name:'手机号',src:'http://localhost:8080/src/assets/img/share_phone.png'},
                ]
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_login.css" scoped></style>