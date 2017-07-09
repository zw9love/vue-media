<template>
  <div>
    <div class="media_info_contain" :class="{ have_movie: data.isMovie}">
      <div class="media_info_left">
        <a href="javascript:;" @click="jump" >
          <img :src="require('../assets/img/p1.jpg')" alt="">
          <div class="media_info_movie">
            <span></span>
          </div>
        </a>
      </div>
      <div class="media_info_right">
        <p class="p1"><a href="javascript:;" @click="jump" >{{data.title}}</a></p>
        <p class="p2">#{{data.author}}</p>
      </div>
      <div class="media_info_icon">
        <div class="media_info_eyes">
          <img src="../assets/img/eyes.png" alt="">
          <span>{{data.eye_num}}</span>
        </div>
        <div class="media_info_msg">
          <img src="../assets/img/msg.png" alt="">
          <span>{{data.msg_num}}</span>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    props: {
      data: {
        type: Object
      }
    },
    methods: {
      jump(){
        this.$router.push({name: 'show', params: this.data});
      }
    }
  }
</script>
<style src="../assets/css/style_recommend.css" scoped></style>
