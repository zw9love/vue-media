<template>
    <div>
        <mytitle title="我的评论" :isActive="true" ref="mytitle"></mytitle>
        <editshadow ref="shadow"></editshadow>
        <div class="no_comment" v-show="noComment">
            <p>暂无评论</p>
        </div>
        <div class="container">
            <myeditli v-for="(x,index) in list" :index="index" :data="x" ref="editli"></myeditli>
        </div>
    </div>
</template>
<script>
    import Mytitle from '../components/mytitle.vue'
    import Editshadow from '../components/editShadow.vue'
    import Myeditli from '../components/myEditLi.vue'
    export default{
        components:{
            Mytitle,
            Editshadow,
            Myeditli
        },
        data(){
            return{
                list: [
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
                ],
                noComment:false
            }
        }
    }
</script>
<style src="../assets/css/style_common.css" scoped></style>
<style scoped>
    /*无评论块样式*/

    .no_comment{
        position: fixed;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
    }

    .no_comment>p{
        font-size: 1.2rem;
        color:#999;
    }

    .container{
        margin-top:2.5rem;
        padding:0 1.2rem;
    }
</style>