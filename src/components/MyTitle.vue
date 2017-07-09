<template>
  <div class="page_header">
    <div class="back">
      <img src="../assets/img/back.png" alt="" @click="goBack()">
    </div>
    <span class="page-title">{{title}}</span>
    <span class="page-edit" v-show="isActive" @click="edit()">{{str}}</span>
  </div>
</template>
<script>
  export default{
    props: ['title', 'isActive', 'parent'],
    data(){
      return {
        str: '编辑'
      }
    },
    methods: {
      goBack(){
        this.$router.back()
      },
      edit(){
        let editTarget = this.$store.getters.getEditTarget
        editTarget.editActive = !editTarget.editActive
        this.str = editTarget.editActive ? '完成' : '编辑'
      }
    }
  }
</script>
<style src="../assets/css/style_title.css" scoped></style>
