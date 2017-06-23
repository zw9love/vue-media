<template>
    <div>
        <div class="main_order main_sp">
            <a href="javascript:;" @click="go"><img :src="data.src" alt=""></a>
            <div class="main_order_info">
                <p><a href="javascript:;" :style="mystyle" @click="go">{{data.name}}</a></p>
                <p>{{data.time || data.info}}</p>
            </div>
            <orderbutton></orderbutton>
        </div>
        <Myline v-show="data.lineShow"></Myline>
    </div>
</template>
<script>
    import Myline from './myLine.vue'
    import Orderbutton from './orderButton.vue'
    export default{
        props:['data','mystyle'],
        components:{
            Myline,
            Orderbutton
        },
        methods:{
            go(){
                this.$router.push({name:'ordershow',params:this.data});
            }
        }
    }
</script>
<style src="../assets/css/style_order.css" scoped></style>