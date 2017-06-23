<template>
    <div class="text">
        <div class="btn1" @click="goback">
            <span><a href="javascript:;">取消</a></span>
        </div>
        <div class="btn2" @click="goback">
            <span><a href="javascript:;">发表</a></span>
        </div>
        <textarea id="txt" placeholder="我来说两句..." ref="text"></textarea>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        methods:{
            goback(){
                this.$parent.isshadow=!this.$parent.isshadow
                this.$parent.textStyle= {opacity:0,zIndex:-1}
                this.$parent.$refs.showbottom.isactive=!this.$parent.$refs.showbottom.isactive
            }
        }
    }
</script>
<style>
    /*固定底部评论输入框框样式*/

    .text{
        position: fixed;
        bottom:0;
        width:100%;
        height: 13rem;
        max-width: 768px;
        background: #fff;
        box-sizing:border-box;
        left:50%;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
        min-height: 200px;
    }

    .text #txt{
        border:none;
        outline: none;
        position: absolute;
        z-index: 103;
        left:0;
        bottom:0;
        width:100%;
        height: 75%;
        padding:0 20px;
        font-size: 1.2rem;
        box-sizing:border-box;
        /*margin-top:1rem;*/
        overflow: hidden;
        z-index: -1;
        resize:none;
    }

    .text .btn1{
        position: absolute;
        left:20px;
        top:1rem;
        font-size: 1.4rem;
    }

    .text .btn2{
        position: absolute;
        right:20px;
        top:1rem;
        font-size: 1.4rem;
        padding-left: 20px;
    }

    .text .btn1 a{
        color:#8c8c8c
    }

    .text .btn2 a{
        color:#e92230
    }

    @media (max-width: 480px) {
        .text a{
            font-size: 16px;
        }

        .text #txt{
            font-size: 15px;
        }
    }
</style>