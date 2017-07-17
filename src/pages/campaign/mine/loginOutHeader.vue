<template>
	<header class="header">
  		<div @click=handleReturnClick class="header-left">
  			<div class="return"></div>
  		</div>
  		<div class="header-title">
  			登录
  		</div>
  		<div class="header-right">
  			<router-link class="header-city" to="/campaign/mine/register">
  				注册
  			</router-link>
  			</span>  			
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
			handleReturnClick: function() {
				this.$router.push({ path: "/campaign" });
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
	    background: #18a9b9;
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
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .88rem;
		font-size: .36rem;
		text-align: center;
		line-height: .88rem;
	}

	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #ccc;
	}

	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    	font-size: .32rem;
    	color: #75ffff;
    }

    .header-city-option {
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
    	border-top: 0.13rem solid #fff;
    	position: relative;
    	top:0.22rem;  	
	}

    .return {
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
