<template>
    <div class="comment">
        <div class="comment_left" v-show="editShow" @click="come">
            <div>
                <span></span>
            </div>
        </div>
        <div class="comment_right">
            <recommend :data="data" v-if="name=='like'"></recommend>
            <comment :data="data" v-else></comment>
        </div>
    </div>
</template>
<script>
    import Recommend from './recommend.vue'
    import Comment from "./comment.vue"
    import $ from 'jquery'
    export default{
        components:{
            Recommend,
            Comment
        },
        props:['data','index','name'],
        data(){
            return{
                editShow:false
            }
        },
        methods:{
            come(){
                let obj=this.$parent.$refs.shadow
                obj.isactive=true;
                obj.index=this.index
            }
        }
    }
</script>
<style src="../assets/css/style_edit.css" scoped></style>