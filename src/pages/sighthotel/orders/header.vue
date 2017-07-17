<template>
   <header class="header">
  		<a class="header-left" @click=handleBackClick>
  			<div class="return"></div>
  		</a>
  		<h1 class="order-write">订单填写</h1>
  		<div class="header-right">
  			<router-link to="/login">
  				<span class="index-login">登录</span>
  			</router-link>
  		</div>
  	</header>
</template>

<script>

export default {
   data() {
   		return {

   		}
   },

   methods: {
   		handleBackClick() {
   			this.$emit("back")
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
	    z-index: 91;
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
	.return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.order-write {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		margin: 0 1rem;
		line-height: .88rem;
		font-size: .32rem;
		font-size: normal;
		text-align: center;
		color: #fff;
	}
	.index-login {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
	}
</style>