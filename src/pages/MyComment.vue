<template>
  <div>
    <MyTitle :title="title" :isActive="true"></MyTitle>
    <MyShadow :title="shadowTitle"></MyShadow>
    <div class="no_comment" v-if="commentData.length == 0">
      <p>暂无评论内容</p>
    </div>
    <div class="container">
      <div v-for="(x,i) in commentData" :class="{'isFirst':i == 0}">
        <div class="comment">
          <div class="comment_left" v-show="editActive" @click="editClick(i)">
            <div>
              <span></span>
            </div>
          </div>
          <div class="comment_right">
            <Comment :data="x"></Comment>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import MyTitle from '../components/MyTitle.vue'
  import Comment from '../components/Comment.vue'
  import MyShadow from '../components/MyShadow.vue'
  import Mock from 'mockjs'

  export default{
    components: {
      MyTitle,
      Comment,
      MyShadow
    },
    data(){
      return {
        commentData: [],
        title: '我的评论',
        shadowTitle: '是否删除这条评论？',
        editActive:false,
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
        this.commentData.splice(this.editIndex,1)
      },
      renderData(){
        let data = Mock.mock({
          'list|5': [{
            'title': '@ctitle(5,100)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'like_num|0-999': 0,
            'time|': '@integer(1, 24)' + '小时之前',
            // 评论的条数
            'data|0-30': [{
              'name1': '@cname(0,4)',
              'name2': '@cname(0,4)',
              'info': '@ctitle(5,50)'
            }]
          }],
        }).list

        this.commentData = this.commentData.concat(data)
      }
    },
    mounted(){
      let action = {
        type: 'setEditTarget',
        value: this
      }
      this.$store.dispatch(action)
      this.renderData()
      this.myScroll(this, {data_name: 'commentData', fn_name: 'renderData', num: 30})
    },
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_edit.css" scoped></style>
