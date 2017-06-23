<template>
    <div>
        <mytitle title="我的收藏" :isActive="true" ref="mytitle"></mytitle>

        <editshadow ref="shadow"></editshadow>

        <div class="no_comment" v-show="noComment">
            <p>暂无收藏内容</p>
        </div>

        <div class="container">
            <myeditli v-for="(x,index) in list" :data="x"  :index="index" ref="editli" name="like"></myeditli>
        </div>
    </div>
</template>
<script>
    import Mytitle from '../components/mytitle.vue'
    import Myeditli from '../components/myEditLi.vue'
    import Editshadow from '../components/editShadow.vue'
    export default{
        components:{
            Mytitle,
            Myeditli,
            Editshadow
        },
        data(){
            return{
                list:[
                    {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                    {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}}
                ],
                noComment:false
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style scoped>
    /*无评论块样式*/

    .no_comment{
        position: fixed;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        /*display: none;*/
    }

    .no_comment>p{
        font-size: 1.2rem;
        color:#999;
    }

    .container{
        margin-top:2.5rem;
        padding:0 1.2rem;
    }
</style>