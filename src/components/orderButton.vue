<template>
    <a href="javascript:;">
        <div class="main_order_select" orderFlag="true" :style="[mystyle,orderstyle]" @click="confirm">
            <div class="icon_add" v-show="!isorder">
                <span></span>
                <span></span>
            </div>
            <span :class="{has_order:ishas}">{{msg}}</span>
        </div>
    </a>
</template>
<script>

    export default{
        props:['mystyle','modal'],
        data(){
            return{
                msg:' 订阅',
                isorder:false,
                ishas:false,
                orderstyle:{},
                timer:null,
                flag:true,
                obj : (this.$parent.$parent.ismodal != undefined ) ? this.$parent.$parent : this.$parent
            }
        },
        methods:{
            confirm(){
                if(!this.flag) return;
                this.flag=false;
                this.isorder=!this.isorder;
                this.obj.modalobj={zIndex:10000};
                this.obj.ismodal=true;
                if(this.isorder){
                    this.msg='已订阅';
                    this.orderstyle={border:'1px solid rgb(153, 153, 153)'}
                    this.ishas=true;
                    this.obj.message='已添加订阅'
                }else{
                    this.msg=' 订阅';
                    this.orderstyle={};
                    this.ishas=false;
                    this.obj.message='已取消订阅'
                }
                let self=this;
                clearTimeout(this.timer)
                this.timer=setTimeout(function(){
                    self.obj.ismodal=false;
                    //600毫秒之后再执行
                    setTimeout(function(){
                        self.obj.modalobj={};
                        self.flag=true;
                    },600)
                },1000);
            }
        }
    }
</script>
<style src="../assets/css/style_order.css" scoped></style>