<template>
    <div>
        <mytitle :title="title" :isActive="false" :justback="justback"></mytitle>
        <div class="add_container" @click="search">
            <a href="javascript:;">
                <div class="media_search">
                    <div class="bottom"></div>
                    <div class="big_add">
                        <div class="add">
                            <span></span>
                            <span></span>
                        </div>
                        <span>&nbsp;添加更多订阅号</span>
                    </div>
                </div>
            </a>
        </div>

        <p class="noorder">暂无订阅内容</p>

        <div class="container">
            <orderlistli v-for="x in list" :data="x"></orderlistli>
        </div>
    </div>
</template>
<script>
    import Orderlistli from "../components/orderListLi.vue"
    import Mytitle from "../components/mytitle.vue"
    export default{
        components:{
            Orderlistli,
            Mytitle
        },
        data(){
            return{
                list:[
                    {time:'22:08',num:20,name:'全民星探1',info:'著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1',src:require('../assets/img/orderlogo.png')},
                    {time:'22:09',num:21,name:'全民星探2',info:'著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2',src:require('../assets/img/orderlogo.png')},
                    {time:'22:10',num:22,name:'全民星探3',info:'著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3',src:require('../assets/img/orderlogo.png')},
                    {time:'22:11',num:23,name:'全民星探4',info:'著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4',src:require('../assets/img/orderlogo.png')},
                ],
                title:'我的订阅',
                justback:false
            }
        },
        methods:{
            search(){
                this.$router.push({name:'subscribe'});
            }
        },
        mounted(){
            if(this.$route.params.back){
                this.justback=true;
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_orderlist.css" scoped></style>