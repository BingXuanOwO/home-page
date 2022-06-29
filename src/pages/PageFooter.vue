<template>
  <footer>
    <a v-for="item in footerContent" :href="item.href" :key="item.id">{{item.content}}</a>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  props:{
    footerContent:Array
  }
}
</script>

<style scoped>
  footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:40px 0;
  }
  footer a{
    padding: 0px;
    margin: 15px;
    font-size: 12px;
    opacity: .5;
    color: #fff;
  }
  footer a:link{
    text-decoration: none;
    border-bottom: rgba(0,0,0,0) solid 1px;
    transition: 0.3s;
  }
  footer a:link:hover{
    border-bottom: #fff solid 1px;
  }
</style>