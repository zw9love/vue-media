<template>
    <div class="comment_fixed" v-show="isactive">
        <div class="comment_fixed_hide" v-show="isshow">
            <div class="comment_fixed_contain">
                <ol v-for="x in shareList">
                    <li v-for="y in x">
                        <img :src="y.src" alt="">
                        <span>{{y.name}}</span>
                    </li>
                </ol>
            </div>
        </div>
        <showpublish></showpublish>
    </div>
</template>
<script>
    import Showpublish from './showPublish.vue'
    export default{
        components:{
            Showpublish
        },
        data(){
            return {
                shareList:[
                    [
                        {name:'新浪微博',src:'http://localhost:8080/src/assets/img/share_weibo.png'},
                        {name:'微信好友',src:'http://localhost:8080/src/assets/img/share_wechat.png'},
                        {name:'朋友圈',src:'http://localhost:8080/src/assets/img/share_friend.png'},
                    ],
                    [
                        {name:'QQ',src:'http://localhost:8080/src/assets/img/share_qq.png'},
                        {name:'QQ空间',src:'http://localhost:8080/src/assets/img/share_zone.png'},
                        {name:'复制链接',src:'http://localhost:8080/src/assets/img/share_copy.png'},
                    ]
                ],
                isshow:false,
                isactive:true
            }
        }
    }
</script>
<style src="../assets/css/style_fixed.css"></style>