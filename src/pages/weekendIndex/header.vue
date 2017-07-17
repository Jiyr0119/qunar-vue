<template>
	<header class="header" >
  		<a class="header-left" v-on:click="goBack">
  			<div class="return"></div>
  		</a>
  		<div class="header-right">
  			<router-link to="/city">
  				<span class="header-city">{{this.$store.state.city}}<i class="header-city-option"></i></span> 
  			</router-link>
  		</div>
  	</header>
</template>

<script>
export default {
  props: ["city"],
  methods: {
  	goBack: function() {
  		this.$router.go(-1)
  	}
  }
}
</script>

<style scoped>
	.header {
	    position: relative;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.header-left {
		position: absolute;
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .26rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    	font-size: .32rem;
    }
    .header-city-option {
		height: 0rem;
		width: 0rem;
		border: 0.10rem solid transparent;
    	border-top: 0.14rem solid #fff;
    	position: relative;
    	top: 0.25rem;
    	left: .14rem;	
	}
    .return {
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.header-right {
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
</style>
