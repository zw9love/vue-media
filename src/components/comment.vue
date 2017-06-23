<template>
    <div class="main_contain">
        <div class="main_order main_admin">
            <a href="javascript:;"><img :src="data.src" alt=""></a>
            <div class="main_order_info">
                <p><a href="javascript:;">{{data.name}}</a></p>
                <p>{{data.time}}</p>
            </div>
            <div class="main_comment">
                <div class="main_comment_contain">
                    <span>{{data.msg}}</span>
                    <a href="javascript:;"><img src="../assets/img/msg.png" alt=""></a>
                </div>
                <div class="main_comment_contain">
                    <span>{{data.like}}</span>
                    <a href="javascript:;" @click="add"><img src="../assets/img/like.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="main_comment_msg">
            <div class="main_comment_owner">
                <p>{{data.commentInfo}}</p>
                <div v-show="show">
                    <myline></myline>
                    <div class="main_comment_other">
                        <commentLi v-for="x in list" :data="x"></commentLi>
                    </div>
                </div>
                <div v-show="moreShow">
                    <p class="more"><a href="javascript:;">展开更多回复</a></p>
                    <myline></myline>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Myline from './myLine.vue'
    import CommentLi from './commentLi.vue'

    export default{
        props:['data'],
        components:{
            Myline,
            CommentLi,
        },
        data(){
            return {
                show: !this.data.arr ? false : true,
                list: this.data.arr ? this.data.arr : [],
                moreShow:(!this.data.arr || this.data.arr.length < 4) ? false :true,
                islike:false
            }
        },
        methods:{
            add(){
                if(this.islike) return
                this.islike=true;
                this.data.like++;
            }
        }
    }
</script>
<style src="../assets/css/style_comment.css" scoped></style>
<style src="../assets/css/style_order.css" scoped></style>