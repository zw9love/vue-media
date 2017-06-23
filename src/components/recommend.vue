<template>
    <div>
        <div class="media_info_contain" :class="{ have_movie: data.ismovie}">
            <div class="media_info_left">
                <a href="javascript:;" @click="jump">
                    <img :src="require('../assets/img/p1.jpg')" alt="">
                    <div class="media_info_movie">
                        <span></span>
                    </div>
                </a>
            </div>
            <div class="media_info_right">
                <p class="p1"><a href="javascript:;" @click="jump">卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney</a></p>
                <p class="p2">时尚芭莎</p>
            </div>
            <div class="media_info_icon">
                <div class="media_info_eyes">
                    <img src="../assets/img/eyes.png" alt="" >
                    <span>{{data.eyes}}</span>
                </div>
                <div class="media_info_msg">
                    <img src="../assets/img/msg.png" alt="">
                    <span>{{data.msg}}</span>
                </div>
            </div>
        </div>
        <myline></myline>
    </div>
</template>
<script>
    import Myline from './myLine.vue'
    import $ from 'jquery'
    export default{
        components:{
            Myline
        }
        ,
        props:{
            data:{
                type:Object
            },
            myshow:{
                type:Boolean
            }
        },
        methods:{
            jump(){
                if(this.myshow){
                    this.$parent.hasMovie=this.data.infoObj.ismovie;
                    this.window.scrollTop(0)
                }else{
                    this.$router.push({name:'show',params:this.data.infoObj});
                }
            }
        }
    }
</script>
<style>
    @import url("../assets/css/style_recommend.css");
</style>