<template>
  <div>
    <MyMask></MyMask>
    <section class="main">
      <!--<Mask></Mask>-->
      <p class="main_title">{{showData['title']}}</p>
      <!--订阅块-->
      <div class="main_order main_sp">
        <a href="javascript:;"><img src="../assets/img/order.png" alt=""></a>
        <div class="main_order_info">
          <p><a href="javascript:;">{{showData['author']}}</a></p>
          <p>{{showData['time']}}</p>
        </div>
        <OrderCell :orderActive="showData['isOrder']"></OrderCell>
      </div>
      <div class="line"></div>
      <!--电影块-->
      <div class="movie" v-if="showData['isMovie']">
        <video src="../assets/video/go.mp4" id="video"></video>
        <img src="../assets/img/movie.jpg" alt="">
        <a href="javascript:;">
          <div class="media_info_movie">
            <span></span>
          </div>
        </a>
        <div class="line"></div>
      </div>
      <!--文章块-->
      <div v-else>
        <div class="main_info">
          <div v-for="x in showData['infoData']">
            <p v-show="x.info">{{x.info}}</p>
            <div class="main_info_img" v-show="x.src">
              <img :src="x.src" alt="">
            </div>
          </div>
        </div>
        <p class="read_all">
          <a href="javascript:;">阅读原文</a>
        </p>
      </div>

      <div class="main_share">
        <ul>
          <span>分享:</span>
          <li><a href="javascript:;"><img src="../assets/img/share_friend.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="../assets/img/share_friend.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="../assets/img/share_qq.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="../assets/img/share_wechat.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="../assets/img/share_weibo.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="../assets/img/share_zone.png" alt=""></a></li>
        </ul>
      </div>
      <div class="line"></div>
      <p class="same_read">
        相关阅读
      </p>

      <Recommend :data="x" v-for="x in recommendData"></Recommend>

      <p class="same_read">
        热门评论
      </p>
      <div class="container" style="margin:0">
        <Comment :data="x" v-for="x in commentData" :commentActive="true"></Comment>
      </div>

      <!-- <div class="loading">
          <p>加载中...</p>
      </div> -->
    </section>
    <div class="show-shadow" v-show="shadowActive"></div>

    <!--分享块-->
    <div class="comment_fixed share-fixed" v-show="shareActive">
      <div class="comment_fixed_hide">
        <div class="comment_fixed_contain">
          <ol>
            <li><img src="../assets/img/share_weibo.png" alt=""><br>
              <span>新浪微博</span></li>
            <li><img src="../assets/img/share_wechat.png" alt=""><br>
              <span>微信好友</span></li>
            <li><img src="../assets/img/share_friend.png" alt=""><br>
              <span>朋友圈</span></li>
          </ol>
          <ol>
            <li><img src="../assets/img/share_qq.png" alt=""><br>
              <span>QQ</span></li>
            <li><img src="../assets/img/share_zone.png" alt=""><br>
              <span>QQ空间</span></li>
            <li><img src="../assets/img/share_copy.png" alt=""><br>
              <span>复制链接</span></li>
          </ol>
        </div>
      </div>
      <div class="cancle" @click="cancel()" >
        <a href="javascript:;" id="cancel">取消</a>
      </div>
    </div>

    <!--默认块-->
    <div class="comment_fixed" v-show="active">
      <ul>
        <li><a href="javascript:;"><img src="../assets/img/back.png" alt="" class="back" @click="goBack()" ></a></li>
        <li @click="textClick()" >
          <div class="comment_txt">
            <span></span>
            <span>发表伟大言论...</span>
          </div>
        </li>
        <li><a href="javascript:;" @click="shareClick()" ><img src="../assets/img/fix_share.png" alt="" id="share"></a>
        </li>
        <li v-if="!starActive"><a href="javascript:;" @click="starClick()" ><img src="../assets/img/star.png"
                                                                                alt=""></a></li>
        <li v-if="starActive"><a href="javascript:;" @click="starClick()" ><img src="../assets/img/star_hover.png"
                                                                               alt=""></a></li>
        <li><a href="javascript:;" @click="textClick()" ><img src="../assets/img/fix_msg.png" alt=""
                                                             style="width: 30px;"><span class="num">666</span></a>
        </li>
      </ul>

    </div>

    <div class="text" v-show="textActive">
      <div class="btn1">
        <span><a href="javascript:;" @click="cancelText()" >取消</a></span>
      </div>
      <div class="btn2">
        <span><a href="javascript:;" @click="sureText()" >发表</a></span>
      </div>
      <textarea id="txt" :placeholder="placeholder" v-model="myComment" ref="txt"></textarea>
    </div>

  </div>
</template>
<script>
  import Recommend from "../components/Recommend.vue"
  import Comment from "../components/Comment.vue"
  import OrderCell from "../components/OrderCell.vue"
  import MyMask from "../components/MyMask.vue"
  import Mock from 'mockjs'
  import $ from 'jquery'
  export default{
    components: {
      Recommend,
      Comment,
      OrderCell,
      MyMask
    },
    data(){
      return {
        lock: false,
        recommendData: [],
        commentData: [],
        showData: [],
        active: true,
        shareActive: false,
        shadowActive: false,
        textActive: false,
        starActive: false,
        commentActive: false,
        myComment: '',
        placeholder: '我来说两句...',
        txtTarget:null
      }
    },
    methods: {
      // 评论cell的msg按钮的点击事件
      commentCellClick(){
        this.myComment = ''
        this.commentActive = true
        this.shadowActive = true
        this.textActive = true
      },
      goBack(){
        this.$router.back()
      },
      sureText(){
        this.cancelText()

        // 如果是在点击comment块的时候
        if (this.commentActive) {
          let arr = this.$store.getters.getCommentTarget
          let name = ''
          if (this.placeholder.search('回复') != -1) {
            name = this.placeholder.slice(3)
            // console.log(name)
          }

          let data = {
            'name1': '旺仔小牛奶',
            'name2': name,
            'info': this.myComment
          }
          arr.push(data)
          // console.log(arr)
        } else {
          let data = {
            'title': this.myComment,
            'author': '旺仔小牛奶',
            'msg_num': 0,
            'like_num': 0,
            'time': '刚刚',
            // 评论的条数
            'data': []
          }
          this.commentData.push(data)
        }
      },
      cancelText(){
        this.shadowActive = false
        this.textActive = false
      },
      textClick(){
        this.txtTarget.focus()
        this.myComment = ''
        this.placeholder = '我来说两句...'
        this.commentActive = false
        this.shadowActive = true
        this.textActive = true
      },
      shareClick(){
        this.shadowActive = true
        this.shareActive = true
        this.active = false
      },
      starClick(){
        let maskLock = this.$store.getters.getMaskLock
        if (maskLock) return
        let action = {type: 'setMaskLock', value: true}
        this.$store.dispatch(action)
        this.starActive = !this.starActive
        let mask = this.$store.getters.getMask
        mask.msg = this.starActive ? '已添加收藏' : '已取消收藏'
        mask.toggleActive()
      },
      cancel(){
        this.shadowActive = false
        this.shareActive = false
        this.active = true
      },
      renderRecommendData() {
        this.recommendData = Mock.mock({
          'list|4': [{
            'title': '@ctitle(6,100)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'eye_num|0-999': 0,
            'isMovie': '@boolean',
            'id': '@id'
          }],
        }).list
      },
      renderCommentData(){
        let data = Mock.mock({
          'list|5': [{
            'title': '@ctitle(5,100)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'like_num|0-999': 0,
            'time': '@integer(1, 24)' + '小时之前',
            // 评论的条数
            'data|0-30': [{
              'name1': '@cname(0,4)',
              'name2': '@cname(0,4)',
              'info': '@ctitle(5,50)'
            }]
          }],
        }).list

        this.commentData = this.commentData.concat(data)
      },
      renderShowData(){
        this.showData = this.$route.params
//        this.showData.infoData.forEach((val) => {
//
//        })
      }
    },
    created(){
      let action = {type: 'setShowTarget', value: this}
      this.$store.dispatch(action)
    },
    mounted(){
      $(window).scrollTop(0)
      // 不能点开文本框聚焦。。。
      this.txtTarget = this.$refs.txt
      this.renderRecommendData()
      this.renderCommentData()
      this.renderShowData()
      this.myScroll(this, {data_name: 'commentData', fn_name: 'renderCommentData', num: 30})
    },
    destroyed(){
      this.unScroll()
    }
  }
</script>
<style src="../assets/css/style_show.css" scoped></style>
<style src="../assets/css/style_order.css" scoped></style>
