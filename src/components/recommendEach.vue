<template>
    <div>
        <recommend v-for="(x,index) in arr"  :data="x"></recommend>
        <bigrecommend :bigdata="bigarr"></bigrecommend>
    </div>

</template>
<script>
    import Recommend from './recommend.vue'
    import Bigrecommend from './bigRecommend.vue'
    export default{
        data(){
            return {
                arr:[],
                bigarr:{}
            }
        },
        props:{
            mydata:{
                type:Array
            }
        },
        components:{
            Recommend,
            Bigrecommend
        },
        created(){
            this.bigarr=this.mydata.pop();
            this.arr=this.mydata;
        }
    }
</script>
<style>

</style>