<script src="../../../AppData/Roaming/npm/node_modules/vue-cli/node_modules/http-proxy-middleware/index.js"></script>
<script src="../../../AppData/Roaming/npm/node_modules/vue-cli/node_modules/vue-template-compiler/index.js"></script>
<template>
    <div class="media">
        <!--<keep-alive v-if="keepAlive">-->
            <router-view ></router-view>
        <!--</keep-alive>-->
        <!--<router-view v-else></router-view>-->
        <router-view name="other"></router-view>
    </div>
</template>
<style>
  *{
    margin:0;
    padding:0;
    list-style: none;
  }
</style>
<script>
    import Home from "./pages/home.vue"
    import $ from "jquery"
    export default{
        data(){
            return{
                keepAlive:true,
                url:'http://m.69room.cn/app/home/index.jhtml',
                url1:'http://localhost:8081/package.json',
                url2:'http://api.douban.com/v2/movie/top250?count=10',   //豆瓣 jsonp接口
                url3:'http://www.heshetrends.com/index.php?c=search&a=searching&word=&store_id=&cate_id=498&brand_id=0&price_id=0&sort_id=&page=1&flag=2&t=14912313416620',
                url4:'http://mobile.rmzxb.com.cn/api/json-wnys.php?channelId=000002&page=1&num=10',
                url5:'https://sug.so.360.cn/suggest?callback=suggest_so&word=a' //360 jsonp接口
            }
        },
        components:{
            Home
        },
        beforeCreate(){
            //页面一出来马上要确定html的字号大小
            this.init();
            //当可视窗的尺寸发生改变的时候
            this.window.resize(this.init);
        },
        created(){
            console.log('设备像素比为:'+window.devicePixelRatio);
//            alert(888)
            /*
             ,{}, {
             headers: {"X-Requested-With": "XMLHttpRequest"},
             emulateJSON: true,
             credentials: true
             }
             */
            /*this.$http.jsonp('https://sug.so.360.cn/suggest?callback=suggest_so&word=a')
                .then(response => {
                // get body data
                let data = response.body;
                console.log(data)

            }, response => {
                // error callback
                console.log('没拿到数据')
            });*/
        }
    }
</script>
