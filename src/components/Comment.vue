<template>
  <div class="main_contain">
    <div class="main_order main_admin">
      <a href="javascript:;"><img src="../assets/img/order.png" alt=""></a>
      <div class="main_order_info">
        <p><a href="javascript:;">{{data.author}}</a></p>
        <p>{{data.time}}</p>
      </div>
      <div class="main_comment">
        <div class="main_comment_contain">
          <span v-if="length <= 5">{{renderData.length}}</span>
          <span v-else>{{data.data.length}}</span>
          <img src="../assets/img/msg.png" alt="" @click="writeMessage()">
        </div>
        <div class="main_comment_contain">
          <span>{{data.like_num}}</span>
          <img src="../assets/img/like.png" alt="" @click="addLike()">
        </div>
      </div>
    </div>
    <div class="main_comment_msg">
      <div class="main_comment_owner">
        <p>{{data.title}}</p>
        <div v-show="renderData.length > 0">
          <div class="line"></div>
          <div class="main_comment_other">
            <p v-for="(x,i) in renderData"><span class="main_comment_name"><a href="javascript:;"
                                                                              @click="nameClick(x.name1)">{{x.name1}} </a></span><span
              v-if="x.name2">回复</span><span class="main_comment_name"><a href="javascript:;"
                                                                          @click="nameClick(x.name2)"> {{x.name2}}:</a></span>{{x.info}}
            </p>
          </div>
          <p class="more" v-show="length > 5" @click="more()"><a href="javascript:;">展开更多回复</a></p>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    props: ['data'],
    components: {},
    data(){
      return {
        renderData: [],
        length: 0
      }
    },
    methods: {
      writeMessage(){
      },
      addLike(){
      },
      more(){
      },
      nameClick(){
      },
    },
    created(){
      this.renderData = this.data['data'].slice(0, 5)
      this.length = this.data['data'].length
    }
  }
</script>
<style src="../assets/css/style_comment.css" scoped></style>
<style src="../assets/css/style_order.css" scoped></style>
