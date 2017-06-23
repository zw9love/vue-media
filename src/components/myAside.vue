<template>
    <div class="aside" :class="{go_aside:isactive}">
        <div class="login_head">
            <a href="javascript:;" @click="login"><img :src="require('../assets/img/login.png')" alt=""></a>
            <span><a href="javascript:;" @click="login">点击登录</a></span>
        </div>
        <ul>
            <asideli v-for="(x,index) in mylist" :data="x" :index="index"></asideli>
        </ul>
    </div>
</template>
<script>
    import Asideli from './asideLi.vue'
    export default{
        components:{
            Asideli
        },
        data(){
            return {
                mylist:{},
                isactive:this.active
            }
        },
        created(){
            this.mylist=this.$parent.asideList;
        },
        props:['active'],
        methods:{
            login(){
                this.$router.push({name:'loginlist'});
            }
        }
    }
</script>
<style>
    /*侧边栏*/

    .aside{
        width:70%;
        background: #fff;
        position: absolute;
        left:-70%;
        top:0;
        padding-left: 1.2rem;
        box-sizing:border-box;
        transition:all 0.8s ease 0s;
        -webkit-transition:all 0.8s ease 0s;
        opacity: 0;
        z-index: 1;

    }

    .aside>a{
        display: inline-block;
    }

    /*侧边栏登录头像*/

    .login_head{
        overflow: hidden;
        margin-top:2.5rem;
    }

    .login_head img{
        width:4.5rem;
        height:4.5rem;
        box-sizing:border-box;
        border:2px solid #333;
        float: left;
        border-radius: 50%;
    }

    .login_head span{
        float: left;
        line-height: 4.5rem;
        font-size: 1.5rem;
        margin-left:23px;
    }

    /*侧边栏ul块*/


    div.go_aside{
        left:0;
        opacity: 1;
    }

    .aside ul {
        margin-top:3rem;
    }

    .aside ul li{
        overflow: hidden;
        clear: both;
    }

    .aside ul li img{
        float: left;
        width: 2.5rem;
        height: 2.5rem;
    }

    .aside ul li span{
        float: left;
        font-size: 1.4rem;
        line-height: 2.5rem;
        margin-left:16px;
    }

    @media (max-width: 480px){
        /* 侧边栏480以下的媒体查询  配合html的字号的大小改变*/

        .aside ul li{
            box-sizing:border-box;
            padding-left: 40px;
            position: relative;
            height: 24px;
            /*background: yellow;*/
        }

        .aside ul li span{
            line-height: 24px;
            margin-left:0;
            float:none;
            font-size:14px;
        }


        .login_head span{
            font-size: 15px;
            margin-left:1rem;
            height: 46px;
            line-height: 46px;
        }

        .login_head img{
            border:1px solid #333;
            width: 46px;
            height: 46px;
        }

        .aside ul li img{
            width:24px;
            height:24px;
            position: absolute;
            left:0;
            top:0;
        }
    }
</style>
<style src="../assets/css/style_home.css" scoped></style>