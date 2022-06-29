<template>
  <div class="ScrollBar" v-bind:style="{width : width,height : height}">
    <div class="ScrollBarThumb"
         v-bind:style="{width : progress,height : height}"></div>
  </div>
</template>

<script>
export default {
  props: ['progress' , 'height' , 'width'],
  name: "ScrollBar"
}
</script>

<style scoped>
  .ScrollBar{
    width: 200px;
    height: 10px;
    background: #cbcbcb;
    border-radius: 500px;
  }
  .ScrollBarThumb{
    width: 0px;
    height: 10px;
    background: #3c5064;
    border-radius: 500px;
  }
</style>