<template>
    <div class="container">
        <Searchtitle title="搜索尚阅号"></Searchtitle>
        <div class="modal" :class="{active:ismodal}" :style="modalobj"><div>{{message}}</div></div>
        <order v-for="x in list" :data="x" :mystyle="mystyle"></order>
    </div>
</template>
<script>
    import Order from '../components/order.vue'
    import Searchtitle from '../components/searchTitle.vue'
    export default{
        components:{
            Order,
            Searchtitle
        },
        data(){
            return{
                modalobj:{},
                list:[
                    {name:'虎扑网1', info:'简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？',lineShow:true,src:'http://localhost:8080/src/assets/img/order.png'},
                    {name:'虎扑网2', info:'简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？',lineShow:true,src:'http://localhost:8080/src/assets/img/order.png'},
                    {name:'虎扑网3', info:'简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？',lineShow:true,src:'http://localhost:8080/src/assets/img/order.png'},
                    {name:'虎扑网4', info:'简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？',lineShow:true,src:'http://localhost:8080/src/assets/img/order.png'},
                    {name:'虎扑网5', info:'简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？',lineShow:true,src:'http://localhost:8080/src/assets/img/order.png'},
                ],
                mystyle:{
                    color:'#333'
                },
                ismodal:false,
                message:''
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_search.css" scoped></style>
<style src="../assets/css/style_modal.css" scoped></style>