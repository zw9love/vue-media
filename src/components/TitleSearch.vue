<template>
  <div class="page_hide">
    <div class="back" @click="goBack()" >
      <img src="../assets/img/back.png" alt="">
    </div>
    <form id="form">
      <div class="media_search_hide">
        <input type="text">
        <span class="placeholder">
        <img src="../assets/img/search.png" alt="">
        <span>&nbsp;{{placeholder}}</span>
      </span>
      </div>
    </form>
  </div>
</template>
<script>
  export default{
    props: ['title', 'placeholder'],
    data(){
      return {
        isSearch: false,
        txt: ''
      }
    },
    methods: {
      goBack(){
        this.$router.back()
      }
    }
  }
</script>
<style src="../assets/css/style_titleSearch.css" scoped></style>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
