<template>
  <header class="media_header" style="padding-left: 0;border-bottom: 1px solid #e8e8e8">
    <div class="media_header_info" id="wrapper" style="margin:0">
      <ul id="scroller" class="scrollbar">
        <li @click="navClick(index)" v-for="(x,index) in navData">
          <a href="javascript:;" :class="activeIndex == index ? 'current' : ''">{{x.name}}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
  import Mock from 'mockjs'

  export default{
    data(){
      return {
        navData: [],
        activeIndex: 0
      }
    },
    methods: {
      navClick(index){
        if (index == this.activeIndex) return
        let data = Mock.mock({
          'list|3': [{
            'list|4': [
              {
                'id': '@id',
                'title': '@ctitle(6,50)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'eye_num|0-999': 0,
                'isMovie': '@boolean',
                'isOrder': '@boolean',
                'time': '@datetime("yyyy-MM-dd")',
                'src': '../assets/img/order.png',
                'infoData|1-5': [{
                  'info': '@cparagraph()',
                  'src': require('../assets/img/show_1.jpg')
                }]
              },
            ]
          }],
        }).list

        this.activeIndex = index
        this.$parent.recommendData = data
      },
      //渲染导航数据
      renderNavData() {
        let data = Mock.mock({
          'list|30': [{
            'name': '@cword(2, 5)',
          }],
        }).list

        this.navData = data
      }
    },
    created(){
      this.renderNavData()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  header.media_header {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: relative;
    margin-top 50px;
    border-bottom: '1px solid #e8e8e8'
  }

  header.media_header > a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    padding-right: 25px;
  }

  header.media_header > a > img {
    vertical-align: middle;
    width: 22px;
  }

  header.media_header .media_header_info {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-left: 25px;

  }

  header.media_header .media_header_info ul {
    overflow: hidden;
    overflow-x: scroll;
    white-space:nowrap;
  }

  header.media_header .media_header_info ul li {
    /*float: left;*/
    margin-right: 1.65rem;
    display: inline-block;
    vertical-align: middle;
  }

  header.media_header .media_header_info ul li a {
    text-decoration: none;
    color: #333;
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
