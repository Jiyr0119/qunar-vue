<template>
	<header class="order-header border-bottom">
  		<a class="order-header-left" @click="handleBack">
			<div class="order-return"></div>
  		</a>
  		<div class="order-header-title">			
			<h1 class="order-single-line">订单填写</h1>
  		</div>
  	</header>
</template>

<script>
	export default {

		data () {
			return {
			 
			}
		},

		methods: {
			handleBack: function() {
				this.$router.go(-1)
			}
		}
		
	}

</script>


<style scoped>
	.order-header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    text-align: center;
	    color: #fff;
		background: #1ba9ba;
		border-bottom: #1b7a8b .01rem solid;
	}

	.order-header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}

	.order-header-title {		
		height: .88rem;
		line-height: .88rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	
	.order-single-line {
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}

    .order-return{
		transform: rotateZ(45deg);
		width: .2rem;
		height: .2rem;
		border-left: .03rem solid #fff;
		border-bottom: .03rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
