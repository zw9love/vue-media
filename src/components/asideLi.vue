<template>
    <div>
        <a :href="this.data.href">
            <li @click="quitClick($event)">
                <img :src="this.data.src" alt="">
                <span>{{this.data.info}}</span>
            </li>
        </a>
        <myline></myline>
    </div>
</template>
<script>
    import $ from "jquery"
    import Myline from './myLine.vue'
    export default{
        components: {
            Myline
        },
        props: {
            data: {
                type: Object
            },
            index: {
                type: Number
            }
        },
        methods: {
            quitClick(e){
                if (this.index == 4) {
                    e.preventDefault();
                    this.$parent.$parent.$refs.homeshadow.isactive = true;
                    this.wrapper.addClass('noscroll');
                }
            }
        }
    }
</script>
<style src="../assets/css/style_home.css" scoped></style>