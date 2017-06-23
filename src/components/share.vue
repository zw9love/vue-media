<template>
    <div class="main_share">
        <ul>
            <span>分享:</span>
            <li v-for="x in shareData"><a :href="x.href"><img :src="x.src" alt=""></a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                shareData:[
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_friend.png'},
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_friend.png'},
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_qq.png'},
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_wechat.png'},
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_weibo.png'},
                    {href:'javascript:;',src:'http://localhost:8080/src/assets/img/share_zone.png'}
                ]
            }
        }
    }
</script>
<style>
    /*分享块的样式*/

    .main_share ul{
        overflow: hidden;
        position: relative;
    }

    .main_share ul li{
        font-size: 1.4rem;
        float: left;
        width:9.66%;
        box-sizing:border-box;
        margin-right: 7%;
        position: relative;
        padding-top: 9.66%;
    }

    .main_share ul li:nth-child(2){
        opacity: 0

    }

    .main_share ul li:first-child img{
        width: 100%;
    }


    .main_share ul li img{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        vertical-align: middle;

    }

    .main_share ul span{
        position: absolute;
        left:0;
        top:50%;
        transform:translateY(-50%);
        -webkit-transform:translateY(-50%);
        font-size: 1.4rem;
    }

    @media (max-width: 480px){
        .main_share ul span{
            font-size: 16px;
        }
    }
</style>