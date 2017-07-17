<template>
	<header class="header">
  		<a class="header-left">
  			<div class="return"></div>
  		</a>
  		<div class="header-title">
  			<router-link to="/list">
  				<span class="single-line">输入城市/景点/游玩主题</span>
  			</router-link>
  		</div>
  		<div class="header-right">
  			<router-link to="/city">
  				<span class="header-city">{{$store.state.city}}<i class="header-city-option"></i></span>
  			</router-link> 			
  		</div>
  	</header>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>
	.header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
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
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #ccc;
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
