<template>
  <div id="document-background" class="document-background">
    <div id="background-overlay" class="background-overlay" :style="OverlayStyle"></div>
  </div>
</template>

<script>
export default {
  name: "BackGround",
  data(){
    return{
      OverlayStyle: {
        opacity: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        background:'#000000',
      },
      scrollTop:0
    }

  },
  methods:{
    OnScroll(){
      this.scrollTop=document.documentElement.scrollTop / window.innerHeight ;
      this.OverlayStyle.opacity = this.scrollTop > 0.4 ? 0.4 : this.scrollTop;
    }
  },
  mounted(){
    window.addEventListener("scroll", this.OnScroll);
  },
  beforeUnmount(){
    window.removeEventListener("scroll" , this.OnScroll);
  }
}


</script>
<style scoped>
  #document-background{
    background:linear-gradient(to bottom right,#003e5a,#004125);
    z-index: -1;
    position: fixed;
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
  }
</style>