<template>
    <div class="home">
        <myaside :active="isGoAside"></myaside>
        <homeshadow ref="homeshadow"></homeshadow>
        <div class="container" @click="backClick" :class="{go_contain:isGoContain}">
            <div class="contain_shadow" :class="{go_shadow:isGoShadow}"></div>
            <firstnavigation ref="firstnavigation"></firstnavigation>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <section class="media_info">
                <recommendeach v-for="(x,index) in recommendList" :mydata="x"></recommendeach>
            </section>
        </div>
        <!--<button @click="chufa">触发自定义事件</button>-->
    </div>
</template>

<script>

    import $ from 'jquery'
    import Firstnavigation from '../components/firstNavigation.vue'
    import Recommendeach from '../components/recommendEach.vue'
    import Homeshadow from '../components/homeShadow.vue'
    import Myaside from '../components/myAside.vue'
    import Vue from 'vue'

    export default{
        created(){
            this.$on('ok',function(msg){
               alert(msg);
            })
//            this.$parent.keepAlive=true;
//            console.log('home被创造了')
            this.wrapper.css({
                'perspective':'600px',
                '-webkit-perspective':'600px'
            });
        },
        destroyed(){
//            console.log('home被销毁了');
            this.wrapper.css({
                'perspective':'none',
                '-webkit-perspective':'none'
            });
        },
        methods:{
            chufa(){
                this.$emit('ok','我去666')
            },
            //点击页面返回事件
            backClick(){
                this.wrapper.removeClass('noscroll');
                this.isGoContain=false;
                this.isGoShadow=false;
                this.$children[0].isactive=false;
                this.window.off('touchmove');
            }
        },
        components:{
            Recommendeach,
            Firstnavigation,
            Homeshadow,
            Myaside
        },
        data(){
            return{
                isGoContain:false,
                isGoShadow:false,
                isGoAside:false,
                searchShow:true,
                firstnavigationList:[
                    {name:'推荐',classobj:{current:true},href:"#/"},
                    {name:'行业',classobj:{current:false},href:"#/industry/1"},
                    {name:'订阅',classobj:{current:false},href:"#/order/2"},
                    {name:'时尚',classobj:{current:false},href:"#/"},
                    {name:'美妆',classobj:{current:false},href:"#/"},
                    {name:'推荐2',classobj:{current:false},href:"#/"},
                    {name:'行业2',classobj:{current:false},href:"#/"},
                    {name:'订阅2',classobj:{current:false},href:"#/"},
                    {name:'时尚2',classobj:{current:false},href:"#/"},
                    {name:'美妆3',classobj:{current:false},href:"#/"},
                    {name:'美妆4',classobj:{current:false},href:"#/"},
                    {name:'美妆5',classobj:{current:false},href:"#/"},
                    {name:'美妆6',classobj:{current:false},href:"#/"}
                ],
                secondnavigationList:[
                    {name:'咨询',classobj:{menucurrent:true},href:"#/industry/1"},
                    {name:'人物666',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'买手',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'设计师',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚111',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚222',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚333',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚444',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚555',classobj:{menucurrent:false},href:"#/industry/1"},
                    {name:'贺喜时尚666',classobj:{menucurrent:false},href:"#/industry/1"},
                ],
                recommendList:[
                    //推荐块4个一组  3大1小
                    [
                        {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                        {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                        {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}},
                        {eyes:999, msg:333, ismovie:false,infoObj:{ismovie:false}}
                    ]
                ],
                asideList:[
                    {href:'#/orderlist', src:require('../assets/img/myorder.png'), info:'我的订阅'},
                    {href:'#/mylike', src:require('../assets/img/star.png'), info:'我的收藏'},
                    {href:'#/comment', src:require('../assets/img/fix_msg.png'), info:'我的评论'},
                    {href:'#/sugguestion', src:require('../assets/img/suggestion.png'), info:'意见反馈'},
                    {href:'javascript:;', src:require('../assets/img/quit.png'), info:'退出',}
                ]
            }
        }
    }
</script>
<style src="../assets/css/style_home.css"></style>
