<template>
  <div class="search_contain">
    <div class="media_search" @click="goLocation()">
      <div></div>
      <img src="../assets/img/search.png" alt="">
      <span>&nbsp;{{title}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['url', 'title'],
    data(){
      return {}
    },
    methods: {
      goLocation(){
        this.$router.push({name: this.url})
      }
    }
  }
</script>
<style src="../assets/css/style_search.css" scoped></style>
