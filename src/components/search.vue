<template>
  <div class="search_contain" @click="goSeach">
    <div class="media_search">
      <div></div>
      <img src="../assets/img/search.png" alt="">
      <span>&nbsp;搜索</span>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      goSeach(){
        this.$router.push({name: 'search'})
      }
    }
  }
</script>
<style src="../assets/css/style_search.css" scoped></style>
