<template>
  <article id="p-desc" class="hide">
    <h1>关于我</h1>
    <div class="desc-content">
      <p v-for="text in description" :key="text.id">{{ text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "PageDescription",
  props:{
    description:Array,
  },
  methods:{
    OnScroll(){
      //console.log(this.$el.offsetTop - this.$el.scrollTop + "&" );
      //console.log(document.documentElement.scrollTop + window.innerHeight);
      if(this.$el.offsetTop - this.$el.scrollTop < document.documentElement.scrollTop + window.innerHeight - 100){
        this.$el.className="shown";
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.OnScroll);
  },
  beforeUnmount(){
    window.removeEventListener("scroll", this.OnScroll);
  }
}
</script>

<style scoped>
#p-desc{
  margin: 30px 5vw;
  transition: 0.5s;
}
.hide{
  opacity: 0;
  transform: translateY(100px);
}
.shown{
  opacity: 1;
  transform: translateY(0px);
}
</style>