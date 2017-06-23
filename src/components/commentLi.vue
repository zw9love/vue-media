<template>
    <p>
        <span class="main_comment_name"><a href="javascript:;">{{data.name1}}</a><mytemp v-show="myshow" :name="data.name2"></mytemp> :</span>
        {{data.info}}
    </p>
</template>
<script>

    export default{
        props:['data'],
        data(){
            return {
                myshow:this.data.name2 ? true : false
            }
        },
        components:{
            Mytemp:{
                template:'<span class="main_comment_name"> 回复 <a href="javascript:;">{{name}}</a></span>',
                props:['name']
            }
        }
    }
</script>
<style src="../assets/css/style_comment.css" scoped></style>