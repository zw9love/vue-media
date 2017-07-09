<template>
  <div>
    <div class="media_info_big" :class="{ have_movie: data.isMovie}">
      <p><a href="javascript:;" @click="jump" >{{data.title}}</a></p>
      <a href="javascript:;" class="movie" @click="jump" ><img :src="require('../assets/img/b1.jpg')" alt="">
        <div class="media_info_movie">
          <span></span>
        </div>
      </a>
      <div class="media_info_icon">
        <div class="media_info_eyes">
          <img src="../assets/img/eyes.png" alt="">
          <span>{{data.eye_num}}</span>
        </div>
        <div class="media_info_msg">
          <img src="../assets/img/msg.png" alt="">
          <span>{{data.msg_num}}</span>
        </div>
        <p>{{data.author}}</p>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
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
<style src="../assets/css/style_bigRecommend.css" scoped></style>
