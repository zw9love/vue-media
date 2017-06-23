<template>
    <div class="media">
        <!--<keep-alive v-if="keepAlive">-->
            <router-view ></router-view>
        <!--</keep-alive>-->
        <!--<router-view v-else></router-view>-->
        <router-view name="other"></router-view>
    </div>
</template>
<style src="./assets/css/cssreset-min.css"></style>
<style src="./assets/css/global.styl"  lang="stylus" rel="stylesheet/stylus"></style>
<script>
    import Home from "./pages/home.vue"
    export default{
        components:{
            Home
        },
    }
</script>
