<template>

	<ul class="cam-footer">
  		<router-link class="cam-footer-item cam-footer-item-index" to="/campaign">
  			<span class="iconfont cam-footer-item-icon">&#xe62a;</span>
  			<span class="cam-footer-item-title">首页</span>
  		</router-link>
  		<router-link class="cam-footer-item" to="/campaign/newannounce">
  			<span class="iconfont cam-footer-item-icon">&#xe61c;</span>
  			<span class="cam-footer-item-title">最新揭晓</span>
  		</router-link>
  		<router-link class="cam-footer-item" to="/campaign/help">
  			<span class="iconfont cam-footer-item-icon">&#xe60f;</span>
  			<span class="cam-footer-item-title">帮助</span>
  		</router-link>
  		<router-link class="cam-footer-item" to="/campaign/mine">
  			<span class="iconfont cam-footer-item-icon">&#xe672;</span>
  			<span class="cam-footer-item-title">我的</span>
  		</router-link>
  	</ul>
  	
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
	.cam-footer {
		overflow: hidden;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 1rem;
		background-color: #fff;
	}

	.cam-footer-item {
		flex: 1;
		display: block;	
		margin-top: .16rem;	
		text-align: center;
		color: #666;
	}

	.cam-footer-item-icon {
		display: block;
		height: .44rem;
		line-height: .44rem;
		font-size: .44rem;
	}

	.cam-footer-item-title {
		overflow: hidden;
		display: block;
		height: .4rem;
		line-height: .4rem;
		font-size: .2rem;
		white-space: nowrap;
	}

	.cam-footer-item-index {
		color: #21a0af;
	}

</style>
