<template>
  <div>
    <MyTitle :title="title" :isActive="true"></MyTitle>

    <MyShadow :title="shadowTitle"></MyShadow>
    <div class="no_comment" v-if="recommendData.length == 0">
      <p>暂无收藏内容</p>
    </div>
    <div class="container">
      <div v-for="(x,i) in recommendData" :class="{'isFirst':i == 0}">
        <div class="comment">
          <div class="comment_left" v-show="editActive" @click="editClick(i)">
            <div>
              <span></span>
            </div>
          </div>
          <div class="comment_right">
            <Recommend :data="x"></Recommend>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import MyTitle from '../components/MyTitle.vue'
  import Recommend from '../components/Recommend.vue'
  import MyShadow from '../components/MyShadow.vue'
  import Mock from 'mockjs'

  export default{
    components: {
      MyTitle,
      Recommend,
      MyShadow
    },
    data(){
      return {
        recommendData: [],
        title: '我的收藏',
        shadowTitle: '是否删除这条收藏？',
        editActive: false,
        editIndex:''
      }
    },
    methods: {
      editClick(index){
        let shadowTarget = this.$store.getters.getShadowTarget
        shadowTarget.shadowActive = true
        this.editIndex = index
      },
      // 确定按钮
      sureDelete(){
        this.recommendData.splice(this.editIndex,1)
      },
      renderData(){
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
      let action = {
        type: 'setEditTarget',
        value: this
      }
      this.$store.dispatch(action)
      this.renderData()
      this.myScroll(this, {data_name: 'recommendData', fn_name: 'renderData', num: 100})
    },
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_edit.css" scoped></style>
