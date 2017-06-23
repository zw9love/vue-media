<template>
    <div class="menu">
        <mynav flag="second" idName="wrapper2"></mynav>
    </div>
</template>
<script>
    import Mynav from './myNav.vue'
    export default{
        components:{
            Mynav
        }
        ,
        created(){
            let index=this.$route.params.id;
            let obj=this.$parent.$refs.firstnavigation.$children[0].$refs.navli[0];
            obj.changeActive(index);
        }
    }
</script>
<style src="../assets/css/style_menu.css"></style>