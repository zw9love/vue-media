<template>
    <div class="media_header_info" :id="idName">
        <ul id="scroller">
            <navli v-for="(x,index) in mylist"  :data="x" :myindex="index"  :flag="myflag" ref="navli"></navli>
        </ul>
    </div>
</template>
<script>
    import $ from 'jquery'
    import Navli from './navLi.vue'

    export default{
        data(){
            return {
                mylist:{},
                myflag:this.flag
            }
        },
        created(){
            let obj=this.$parent.$parent;
            if(this.flag=='first'){
                this.mylist=obj.firstnavigationList;
            }else{
                this.mylist=obj.secondnavigationList;
            }
        },
        components:{
            Navli
        },
        props:['flag','idName'],
        methods:{
            navClickInit(idName,classname){
                let center=$(idName+' ul').position().left+$(idName).width()/2;
                let mymax=Number($(idName+' ul').attr('mymax'));
                let index=$(classname).index();

                $(idName+'>ul>li').each(function(i){
                    let dis=center-parseInt($(this).position().left)-$(this).width()/2-15;
                    if(dis>0){
                        dis=0;
                    }
                    else if(dis<(-mymax)){
                        dis=-mymax;
                    }
                    $(this).attr('myleft',dis);

                    if(i==index){
                        $(this).parent().css({
                            'transform':'translateX('+dis+'px)',
                            '-webkit-transform':'translateX('+dis+'px)'
                        });
                    }
                });
            },
            //一级导航栏点击事件初始化工作
            firstInit(){
                this.navClickInit('#wrapper','.current')
            },
            //二级导航栏点击事件初始化工作
            secondInit(){
                this.navClickInit('#wrapper2','.menucurrent')
            },
            //包含块的初始化工作
            containerInit(){
                    let sum = 0, max;
                    let obj = $(this.$el);

                    obj.find('li').each(function () {
                        sum += $(this).outerWidth() + parseInt($(this).css('margin-right'));
                    });
                    max = sum - obj.width();
                    obj.children('ul').attr({
                        'mymax': max
                    });

            }
        },
        mounted(){
            this.containerInit();

            if(this.flag=='first'){
                this.firstInit();
            }else{
                this.secondInit();
            }

            this.go('touch');
            this.go('mouse');
        }
    }
</script>
<style>
    header.media_header .media_header_info{
        width: 100%;
        position:relative;
        overflow: hidden;
        margin-left:25px;
    }

    header.media_header .media_header_info ul{
        position: relative;
        overflow: hidden;
        width:5000px;
    }

    header.media_header .media_header_info ul li{
        float: left;
        margin-right: 30px;
    }

    header.media_header .media_header_info ul li a{
        text-decoration: none;
        color:#333;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    @media (max-width: 480px){
        header.media_header .media_header_info{
            height: 30px;
            line-height: 30px;
        }

        header.media_header .media_header_info ul{
            height: 100%;
        }

        header.media_header .media_header_info ul li{
            margin-right:20px;
            height: 100%;
        }

        header.media_header .media_header_info ul li a{
            font-size:14px;
        }
    }
</style>