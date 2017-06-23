<template>
    <div id="show">
        <div class="modal" :class="{active:ismodal}" :style="modalobj"><div>{{message}}</div></div>
        <showmoive v-show="hasMovie"></showmoive>
        <section class="main">
            <!--{{$route.params.info}}{{$route.params.name}}-->
            <p class="main_title">零售商们致力于将双十一打造成奢侈品的黑色星期五</p>
            <order :data="textList.orderObj"></order>
            <myline></myline>
            <showtext :data="textList" v-show="!hasMovie"></showtext>
            <p class="read_all"><a href="javascript:;">阅读原文</a></p>
            <share></share>
            <myline></myline>
            <p class="same_read">相关阅读</p>
            <recommend v-for="(x,index) in hotRecommend" :data="x" :myshow="isShow"></recommend>
            <p class="same_read">热门评论</p>
            <div class="container">
                <comment v-for="x in commentList" :data="x"></comment>
            </div>
            <div class="loading" v-show="loadingShow">
                <p>加载中...</p>
            </div>
        </section>
        <myline></myline>
        <showbottom ref="showbottom"></showbottom>
        <div class="shadow" v-show="!isshadow"></div>
        <showtextarea :style="textStyle" ref="text"></showtextarea>
    </div>
</template>
<script>
    import Recommend from "../components/recommend.vue"
    import Myline from "../components/myLine.vue"
    import Share from "../components/share.vue"
    import Showtext from "../components/showText.vue"
    import Showtextarea from "../components/showTextArea.vue"
    import Showbottom from "../components/showBottom.vue"
    import Comment from "../components/comment.vue"
    import Order from "../components/order.vue"
    import Showmoive from "../components/showMoive.vue"
    import $ from 'jquery'
    export default{
        created(){
            this.window.scrollTop(0);
            //console.log(this.$parent)
            //this.$parent.keepAlive=false
        },
        components: {
            Recommend,
            Myline,
            Share,
            Showtext,
            Showtextarea,
            Comment,
            Showbottom,
            Order,
            Showmoive
        },
        data(){
            return {
                modalobj:{},
                textStyle:{opacity:0,zIndex:-1},
                isshadow:true,
                isShow:true,
                loadingShow:false,
                hasMovie:this.$route.params.ismovie,
                ismodal:false,
                message:'',
                hotRecommend: [
                    {eyes: 777, msg: 777, ismovie: true,infoObj:{ismovie:true}},
                    {eyes: 888, msg: 888, ismovie: false,infoObj:{ismovie:false}}
                ],
                textList: {
                    title: '我是文章详情页的title啊',
                    orderObj: {name: '时尚芭莎', lineShow:false , time: '2016-07-04', src: 'http://localhost:8080/src/assets/img/order.png'},
                    arr: [
                        {
                            src: "http://localhost:8080/src/assets/img/show_1.jpg",
                            info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚111111'
                        },
                        {
                            src: "http://localhost:8080/src/assets/img/show_1.jpg",
                            info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚222222'
                        },
                        {
                            src: "http://localhost:8080/src/assets/img/show_1.jpg",
                            info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚333333'
                        }
                    ]
                },
                commentList: [
                    {
                        name: '曾威',
                        arr: [{name1: '曾威', name2: '', info: '单论得分能力，蜗壳虚过谁？？？！！！'}],
                        src: 'http://localhost:8080/src/assets/img/order.png',
                        time: '刚刚',
                        like: '300',
                        msg: '300',
                        commentInfo: '科比布莱恩特，科比布莱恩特科比布莱恩特，科比布莱恩特科比布莱恩特科比布莱恩特'
                    },
                    {
                        name: '沈敏杰',
                        arr: [{name1: '沈敏杰', name2: '', info: '麦诗人啊！！！'}],
                        src: 'http://localhost:8080/src/assets/img/order.png',
                        time: '30分钟前',
                        like: '400',
                        msg: '400',
                        commentInfo: '特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪特雷西麦克格雷迪'
                    },
                    {
                        name: '殷镇威',
                        arr: [{name1: '大熊有点帅', name2: '', info: '我勒个去啊，扣篮王卡特啊'}, {
                            name1: '静香有点靓',
                            name2: '',
                            info: '我勒个去啊，扣篮王卡特啊'
                        }, {name1: '大熊有点帅', name2: '静香有点靓', info: '我好想干你啊，射你一脸！！！'}, {
                            name1: '静香有点靓',
                            name2: '大熊有点帅',
                            info: '来啊，等你啊，谁怕谁啊'
                        }],
                        src: 'http://localhost:8080/src/assets/img/order.png',
                        time: '1小时前',
                        like: '500',
                        msg: '500',
                        commentInfo: '文思卡特，文思卡特文思卡特，文思卡特文思卡特文思卡特'
                    },
                    {
                        name: '邓登攀',
                        src: 'http://localhost:8080/src/assets/img/order.png',
                        time: '2小时前',
                        like: '600',
                        msg: '600',
                        commentInfo: '阿伦艾弗森，阿伦艾弗森阿伦艾弗森，阿伦艾弗森阿伦艾弗森阿伦艾弗森'
                    },
                ]
            }
        },
        mounted(){
            let self = this;
            let height = this.window.height();
            let bigHeight = this.document.height();
            this.window.scroll(function () {
                let scrollHeight = $(this).scrollTop();
                let dis = bigHeight - height - scrollHeight
                if (dis <= 200) {
                    self.loadingShow=true;
                }else{
                    self.loadingShow=false;
                }
            });
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style src="../assets/css/style_show.css" scoped></style>
<style src="../assets/css/style_modal.css" scoped></style>
