<template>
    <div class="search_contain" @click="jump">
        <div class="media_search">
            <span>我的订阅号：时尚芭莎...</span>
            <span></span>
        </div>
    </div>
</template>
<script>
    export default{
        created(){
            let index=this.$route.params.id;
            let obj=this.$parent.$refs.firstnavigation.$children[0].$refs.navli[0];
            obj.changeActive(index);
        },
        methods:{
            jump(){
                this.$router.push({name:'orderlist',params:{back:true}});
            }
        }
    }
</script>
<style scoped>
    /*搜索块更改*/

    .search_contain{
        padding:0 1.2rem;
    }

    .media_search{
        margin-top:1.5rem;
        height: 3rem;
        text-align: center;
        position: relative;
        line-height: 3rem;
        cursor: pointer;
        border-radius: 30px;
        border:1px solid #d3d3d3;
        box-sizing:border-box;
    }

    .media_search>div{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        border-radius: 30px;
        border:1px solid #d3d3d3;
        background: transparent;
        box-sizing:border-box;
    }

    .media_search>img{
        margin-top:-8px;
        vertical-align:middle;

    }
    .media_search>span{
        display: inline-block;
        /*margin-top:14px;*/
        font-size: 1.2rem;
        color:#999;
    }

    .media_search>span:last-child{
        width:0.8rem;
        height: 0.8rem;
        border-top:1px solid #999;
        border-right:1px solid #999;
        transform:rotate(45deg);
        -webkit-transform:rotate(45deg);
    }

    @media (max-width: 480px){

        /* 显示的搜索块480以下的媒体查询  配合html的字号的大小改变*/

        .media_search,.media_search_hide{
            height: 28px;
            line-height: 26px;
        }

        .media_search, .media_search_hide{
            margin-top:1rem;
        }


        .media_search>img,.media_search_hide>img{
            width:15px;
            height: 16px;
            margin-top:-2px;
        }

        .media_search>span{
            font-size: 12px;
        }

        .media_search>span:last-child{
            width:8px;
            height: 8px;
        }
    }

</style>