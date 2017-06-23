<template>
    <div class="page_hide">
        <div class="back" @click="back">
            <img src="../assets/img/back.png" alt="">
        </div>
        <form id="form" @submit.prevent="mysubmit">
            <div class="media_search_hide">

                <input type="text" @focus="myfocus" @blur="myblur" v-model="txt" />

                <div v-show="!isSearch">
                    <img src="../assets/img/search.png" alt="">
                    <span>&nbsp;{{title}}</span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        props:['title'],
        data(){
            return{
                isSearch:false,
                txt:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            myfocus(){
                this.isSearch=true;
            },
            myblur(){
                if(!this.txt){
                    this.isSearch=false;
                }
            },
            mysubmit(){
                console.log('回车也能提交');
            }
        },
        watch:{
            txt(newval){
                newval.trim() ? this.isSearch = true : this.isSearch = false;
            }
        }
    }
</script>
<style src="../assets/css/style_search.css" scoped></style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    /*.page_hide*/
        /*background skyblue*/
</style>