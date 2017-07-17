<template>
	<div class="app-download iconfont" ref="app" @click="downloadapp">&#xe6c4;</div>
</template>

<script>
import detect from '@/utils/detect.js'

var scroll = function(dom) {
   var beforeScrollTop = document.body.scrollTop;
    window.addEventListener("scroll", function(){
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if (delta > 0){
            dom.style.cssText = "display:none";
        }else{
            dom.style.cssText = "display:inline";
        }
        beforeScrollTop = afterScrollTop;
    }, false)
}

export default {
  mounted () {
    scroll(this.$refs.app)　
  },
  beforeDestroy() {
    window.removeEventListener("scroll",false)
  },
  methods:{
    downloadapp : function (event) {
      if( detect.os == 'iOS'){
        window.open("https://itunes.apple.com/cn/app/id395096736", "_self");
      }else if(detect.os == 'Android'){
        window.open("https://play.google.com/store/apps/details?id=com.Qunar&hl=zh", "_self");
      }else if(detect.os != 'iOS' || 'Android'){
        window.open("http://app.qunar.com/", "_self");
      }
    }
  },
  data () {
    return {
     
    }
  }
  
}
</script>


<style scoped>
	.app-download{
        display: none;
        position: fixed;
        top: 7.5rem;
        left: 0;
        width: 1.36rem;
        height: 1.15rem;
        z-index: 98;
        background-size: 1.36rem 1.36rem;
        font-size: 1rem;
        color: #00afc7;
    }
</style>