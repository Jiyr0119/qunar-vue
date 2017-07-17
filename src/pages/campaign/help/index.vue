<template>
	<div class="help-page">

		<div class="help-header">
			<router-link class="help-header-left iconfont" to="/campaign">&#xe657;</router-link>
	  		<h1 class="help-header-middle">一元夺宝活动规则&常见问题</h1>
	  		<router-link to="/">
	  			<a class="help-header-right"><img src="../../../assets/img/campaign/help-logo.png" class="help-header-logo"/><br>首页</a>
	  		</router-link>
		</div>
		
		<help-main></help-main>
		
	</div>
</template>

<script>
	import helpmain from './myrule'

	export default {
		data () {
		    return {
		     	
		    }
		},

		components: {
	        "help-main": helpmain
		}		
	}
</script>

<style scoped>
	.help-header {
	    position: relative;
	    background: #1ba9ba;
	    height: .8rem;
	    text-align: center;
	    color: #fff;
	    border-bottom: #1b7a8b .02rem solid;
	}
	
	.help-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .84rem;
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		font-size: .36rem; 
		color: #fff;
	}
	
	.help-header-middle {
		overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    height: .8rem;
	    line-height: .8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
	.help-header-right {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: 38px;
	    line-height: .2rem;
	    font-size: .2rem;
	    text-decoration: none;
	    color: #fff;
	}
	
	.help-header-logo {
	    width: .56rem;
	    margin: .08rem .1rem 0 0;
	}
	
</style>