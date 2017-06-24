<template>
  <MySearch :title="title" :url="url"></MySearch>
</template>
<script>
  import MySearch from './MySearch.vue'
  export default{
    components: {
      MySearch
    },
    data(){
      return {
        title: '搜索推荐内容',
        url: 'recommendSearch',
      }
    }
  }
</script>
