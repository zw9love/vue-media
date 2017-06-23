<template>
    <div class="container">
        <Searchtitle title="搜索推荐文章"></Searchtitle>
        <Recommend v-for="x in list" :data="x"></Recommend>
    </div>
</template>
<script>
    import Recommend from '../components/recommend.vue'
    import Searchtitle from '../components/searchTitle.vue'
    export default{
        components:{
            Recommend,
            Searchtitle
        },
        data(){
            return{
                list:[
                    {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                    {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:999, msg:333, ismovie:false,infoObj:{ismovie:false}}
                ]
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_search.css" scoped></style>