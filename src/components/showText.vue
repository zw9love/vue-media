<template>
    <div class="main_info">
        <p>{{mytitle}}</p>
        <div v-for="x in list">
            <div class="main_info_img">
                <img :src="x.src" alt="">
            </div>
            <p>{{x.info}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props:['data'],
        data(){
            return {
                list:this.data.arr,
                mytitle:this.data.title
            }
        }
    }
</script>
<style>
    /*详情页面的主要内容快*/

    .main_info{
        margin-top:2.5rem;
    }

    .main_info p{
        font-size: 1.4rem;
        color:#333333;
        font-weight: 400;
        line-height: 1.6em;
    }

    .main_info_img{
        width:100%;
        padding-top: 67.80%;
        margin:1.25rem 0;
        position: relative;
        overflow: hidden;
    }

    .main_info_img img{
        position: absolute;
        width:100%;
        left:0;
        top:0;
    }

    @media (max-width: 480px){
        .main_info>p{
            font-size: 16px;
        }
    }

</style>