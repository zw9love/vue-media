<template>
    <div>
        <div class="page_header">
            <div class="back" @click="back">
                <img src="../assets/img/back.png" alt="">
            </div>
            <img :src="mydata.src" alt="">
            <orderbutton :mystyle="mystyle"></orderbutton>
        </div>
        <div class="container">
            <div class="page_explain">
                <p class="page_title">{{mydata.name}}</p>
                <p class="page_info">{{mydata.info}}</p>
            </div>
            <Myline></Myline>
            <recommend v-for="x in list" :data="x"></recommend>
        </div>
        <div class="modal" :class="{active:ismodal}" :style="modalobj"><div>{{message}}</div></div>
    </div>
</template>
<script>
    import Myline from '../components/myLine.vue'
    import Recommend from '../components/recommend.vue'
    import Orderbutton from '../components/orderButton.vue'
    export default{
        components:{
            Myline,
            Recommend,
            Orderbutton
        },
        data(){
            return{
                modalobj:{},
                list:[
                    {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                ],
                mystyle:{
                    top:0,
                    transform:'translate(0)',
                    '-webkit-transform':'translate(0)',
                    '-ms-transform':'translate(0)',
                    right:'1.2rem'
                },
                mydata:this.$route.params,
                ismodal:false,
                message:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_orderShow.css" scoped></style>
<style src="../assets/css/style_modal.css" scoped></style>