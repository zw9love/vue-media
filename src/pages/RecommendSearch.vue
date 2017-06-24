<template>
  <div>
    <TitleSearch :placeholder="placeholder"></TitleSearch>
    <div class="container">
      <Recommend v-for="x in recommendData" :data="x"></Recommend>
    </div>
  </div>
</template>
<script>
  import Recommend from '../components/Recommend.vue'
  import TitleSearch from '../components/TitleSearch.vue'
  import Mock from 'mockjs'
  export default{
    components: {
      Recommend,
      TitleSearch
    },
    data(){
      return {
        placeholder:'搜索推荐文章',
        recommendData:[]
      }
    },
    methods:{
        renderRecommendData(){
          let data = Mock.mock({
            'list|10': [{
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
                'src': require('../assets/img/show_2.jpg'),
//              'src': '../assets/img/show_' + '@integer(1, 3)' + '.jpg'
              }]
            }],
          }).list

          this.recommendData = this.recommendData.concat(data)
        }
    },
    mounted(){
      this.renderRecommendData()
      this.myScroll(this, {data_name: 'recommendData', fn_name: 'renderRecommendData', num: 100})
    },
    destroyed(){
      this.unScroll()
    }
  }
</script>
