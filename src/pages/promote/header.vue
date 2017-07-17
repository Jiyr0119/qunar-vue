<template>
  	<div class="title-header">
         <a class="header-left" @click="handleback">
           <div class="return"></div>
         </a>
         <div class="header-title">
           <h2>特惠门票，热门景点9元起</h2>
         </div>
         <div class="header-home">
           <span class="iconfont home-icon">&#xe60e;</span>
           <h3 class="home-title">首页</h3>
         </div> 
  	</div>	
</template>

<script>

export default {
  data () {
    return {
     
    }
  },
  methods: {
    handleback: function() {
       history.go(-1)
    }
   
  }

}
</script>


<style scoped>
	.title-header {
    background: #1ba9ba;
    width:100%;
    height:.9rem;
  }
  .header-left {
    float: left;
    display: inline-block;
    width: 5.3%;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
  }
  .return{
    transform: rotateZ(45deg);
    width: .24rem;
    height: .24rem;
    border-left: .04rem solid #fff;
    border-bottom: .04rem solid #fff;
    margin: .3rem .1rem;
  }
  .header-title {
    float: left;
    width:73%;
    height:.9rem;
    text-align: center;
    line-height: .9rem;
    color: #fff;
    font-size: .32rem;
  }
  .header-home {
    float: right;
    width:.9rem;
    height: .9rem;
    text-align: center;
    color:#fff;
  }
  .home-icon {
    display: block;
    width: .9rem;
    height: .5rem;
    line-height: .5rem;
  }
  .home-title {
    width: .9rem;
    height: .4rem;
  }

</style>