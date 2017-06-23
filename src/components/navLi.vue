<template>
    <li :class="classObj" @click="changeActive(myindex)" ref="myself">
        <a  :href="myHref">{{data.name}}</a>
    </li>
</template>
<script>
    import $ from "jquery"
    export default{
        data(){
            return {
                myHref:this.data.href,
                classObj:this.data.classobj,
                classname:this.flag=='first'? 'current': 'menucurrent'
            }
        },
        props: {
            data:{
                type:Object
            },
            myindex:{
                type:Number
            },
            flag:{
                type:String
            }
        },
        methods:{
            //改变点击高亮样式
            changeActive(myindex){
                if(this.flag == 'second'){
                    //把store.state里面的count设置为myindex
                    this.$store.state.count = myindex;
//                    console.log(this.$store.state);
                }
                let name=this.classname;
                this.$parent.$refs.navli.forEach(function(val,key){
                    val.classObj[name]=false;
                });
                this.$parent.$refs.navli[myindex].classObj[name]=true;
                let obj=$(this.$refs.myself);

                this.horizontally(obj);
            },
            horizontally(obj){
                obj.parent().removeAttr('class');
                let dis=obj.attr('myleft');
                obj.parent().css({
                    'transform':'translateX('+dis+'px)',
                    '-webkit-transform':'translateX('+dis+'px)'
                });
            }
        }
    }
</script>
<style>

</style>
