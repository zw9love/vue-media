<template>
    <ul>
        <li @click="back" v-show="isactive"><a href="javascript:;"><img src="../assets/img/back.png" alt="" class="back"></a></li>
        <li v-show="isactive">
            <div class="comment_txt" @click="talk">
                <span></span>
                <span>发表伟大言论...</span>
            </div>
        </li>
        <li v-show="isactive"><a href="javascript:;" @click="share"><img src="../assets/img/fix_share.png" alt=""></a></li>
        <li v-show="isactive"><a href="javascript:;" @click="star"><img :src="mysrc" alt=""></a></li>
        <li v-show="isactive"><a href="javascript:;" @click="talk"><img src="../assets/img/fix_msg.png" alt="" ><span class="num">666</span></a></li>

        <div class="cancle" v-show="!isactive" @click="share">
            <a href="javascript:;">取消</a>
        </div>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                obj:this.$parent.$parent,
                timer:null,
                islike:false,
                flag:true,
                mysrc:'http://localhost:8080/src/assets/img/star.png',
                isactive:true
            }
        },
        methods: {
            back(){
//                this.$router.push({name: 'myhome', params: {back: false}})
                this.$router.go(-1);
            },
            star(){
                if(!this.flag) return;
                this.flag=false;
                this.islike=!this.islike;
                this.obj.modalobj={zIndex:10000};
                this.obj.ismodal=true;
                if(this.islike){
                    this.obj.message="已添加收藏"
                    this.mysrc='http://localhost:8080/src/assets/img/star_hover.png'
                }else{
                    this.obj.message="已取消收藏"
                    this.mysrc='http://localhost:8080/src/assets/img/star.png'
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
            },
            share(){
                this.$parent.isshow = !this.$parent.isshow;
                this.isactive = !this.isactive
                this.$parent.$parent.isshadow = !this.$parent.$parent.isshadow
            },
            talk(){
                this.$parent.$parent.isshadow = !this.$parent.$parent.isshadow
                this.$parent.$parent.textStyle= {opacity:1,zIndex:102}
                this.$parent.isactive = !this.$parent.isactive;
                this.$parent.$parent.$refs.text.$refs.text.focus();
            }
        }
    }
</script>
<style src="../assets/css/style_fixed.css" scoped></style>