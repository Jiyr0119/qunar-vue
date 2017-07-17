<template>
	<header class="header">
  		<a class="header-left" @click.prevent="goBack">
  			<div class="return"></div>
  		</a>
  		<div class="header-title">
  			<input type="text"  value="一日游" placeholder="输入城市或地点" class="single-line" @focus.once="clearTxt"/>
  		</div>
  		<div class="header-right">
  			<span class="header-city">搜索 </span>
  		</div>
  	</header>
</template>

<script>
	export default {
	  data () {
	    return {
	     
	    }
	  },
	  methods:{
	  	clearTxt(e){
	  		e.currentTarget.value = ""
	  	},
	  	goBack(){
	  		window.history.go(-1)
	  	}
	  }
	}
</script>


<style scoped>
	.header {
	    position: relative;
	    z-index: 2;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.single-line {
	    position: absolute;
	    height: .52rem;
	    width: 90%;
	    border: none;
	    left: .3rem;
	    color: #000;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    }
    .header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
    	border-top: 0.13rem solid #fff;
    	position: relative;
    	top:0.22rem;  	
	}
    .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
