<template>
    <div>
        <div class="main_order">
            <a href="javascript:;" @click="jump">
                <img :src="data.src" alt="">
                <span class="num">{{data.num}}</span>
            </a>

            <div class="main_order_info">
                <p><a href="javascript:;" @click="jump">{{data.name}}</a></p>
                <p>{{data.info}}</p>
            </div>
            <span id="time">{{data.time}}</span>
        </div>
        <myline></myline>
    </div>
</template>
<script>
    import Myline from '../components/myLine.vue'
    export default{
        props:['data'],
        components:{
            Myline
        },
        methods:{
            jump(){
                this.$router.push({name:'ordershow',params:this.data});
            }
        }
    }
</script>
<style src="../assets/css/style_order.css" scoped></style>
<style src="../assets/css/style_orderlist.css" scoped></style>