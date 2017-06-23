<template>
    <div>
        <mytitle :title="title" :isActive="false"></mytitle>
        <div class="container">
            <div class="sugguest_info">
                <textarea name="" id="" placeholder="请留下您的宝贵意见..." v-model="msg1"></textarea>
            </div>
            <div class="sugguest_phone">
                <input type="text" placeholder="联系方式：QQ、邮箱或手机" maxlength="11" v-model="msg2">
            </div>
            <p>您的联系方式有助于我们沟通和解决问题，仅工作人员可见</p>
            <button class="commit" :class="{hover:isactive}">提交</button>
        </div>
    </div>
</template>
<script>
    import Mytitle from '../components/mytitle.vue'
    import $ from 'jquery'
    export default{

        mounted(){
            this.wrapper.css('overflow','visible');
        },
        destroyed(){
            this.wrapper.css('overflow-x','hidden');
        },
        components:{
            Mytitle
        },
        data(){
            return{
                title:'意见反馈',
                isactive:false,
                msg1:'',
                msg2:''
            }
        },
        methods:{
            test(n1,n2){
                if(n1.trim().length>0 && (/^1[34578]\d{9}$/.test(n2))){
                    this.isactive=true;
                }else{
                    this.isactive=false;
                }
            }
        },
        watch:{
            msg1(newval){
                this.test(newval,this.msg2)
            },
            msg2(newval){
                this.test(this.msg1,newval)
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_sugguestion.css" scoped></style>