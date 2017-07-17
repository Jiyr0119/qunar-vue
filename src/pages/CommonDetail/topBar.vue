<template>
	<div class="topbar" :style="style">
        <a class="top-back iconfont" @click="handleBackClick">&#xe685;</a>
        <h1 class="top-title">故宫</h1>
    </div>
</template>

<script>

export default {
  mounted () {
    var this_ = this;
    window.addEventListener("scroll", function(){
      this_.sTop = document.body.scrollTop;
    }, false)
  },
  beforeDestroy() {
    window.removeEventListener("scroll",false)
  },
  data () {
    return {
        sTop:0
    }
  },
  methods: {
  	handleBackClick:function() {
  		window.history.back()
  	}
  },
  
  computed:{
    style:function(){
      return {
        opacity:this.sTop/200
      }
    }
  }
  
}
</script>


<style scoped>
	.topbar{
      position: fixed;
      height: .88rem;
      background: #00bcd4;
      z-index: 98;
      width: 100%;
      left: 0px;
    }
    .top-back{
      position: absolute;
      font-size: .36rem;
      color: #fff;
      text-align: center;
      left: 0;
      top: 0;
      width: .8rem;
      height: .88rem;
      line-height: .88rem;
    }
    .top-title{
      font-family: "微软雅黑";
      margin: 0 1rem;
      line-height: .88rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: .32rem;
      text-align: center;
      color: #fff;
    }
</style>