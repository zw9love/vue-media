<template>
    <div class="page_header">
        <div class="back" @click="back">
            <img src="../assets/img/back.png" alt="">
        </div>
        <span>{{title}}</span>
        <span class="move" v-show="isActive" @click="edit"><a href="javascript:;">{{name}}</a></span>
    </div>
</template>
<script>
    export default{
        props: ['title','isActive','justback'],
        data(){
            return{
                name:'编辑',
                isactive:false
            }
        },
        methods: {
            back(){
                this.justback ? this.$router.go(-1) : this.$router.push({name: 'myhome', params: {back: true}})
            },
            edit(){
                let arr=this.$parent.$refs.editli;
                this.isactive=!this.isactive;
                this.name = this.isactive ? "取消" : '编辑';
                arr.forEach(function(val){
                    val.editShow=!val.editShow
                });
            }
        }
    }
</script>
<!--<style src="../assets/css/style_common.css" scoped></style>-->
<style scoped>
    /*有返回键的块的样式*/

    .page_header{
        text-align: center;
        position: relative;
        margin-top: 1.25rem;
        overflow: hidden;
        font-size: 1.7rem;
        line-height: 60px;
        padding:0 1.2rem;
        border-bottom: 1px solid #e8e8e8;
    }


    .page_header .back{
        position: relative;
        width:58px;
        height: 60px;
        text-align: center;
        left:0;
        /*top:15px;*/
        cursor: pointer;
        float: left;
    }

    .page_header .back img{
        width:auto;
        height:50%;
        position: absolute;
        left:0;
        top:50%;
        transform:translateY(-50%);
        -webkit-transform:translateY(-50%);
    }

    .page_header>span:nth-child(2){
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
    }

    .page_header>span.move{
        display: block;
        float: right;
    }

    .page_header>span.move a{
        font-size: 1.5rem;
        color:#333;
    }


    @media (max-width:480px){

        .page_header{
            font-size: 16px;
            margin-top: 0px;
        }

        .page_header .back img{
            height: 35%;
        }

        .page_header a{
            font-size: 14px;
        }

        .page_header>span.move a{
            font-size: 14px;
        }

    }
</style>