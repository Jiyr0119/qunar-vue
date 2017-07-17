<template>
	<div class="address-info">
		<div class="address border-bottom">
			<p class="address-txt"><span class="iconfont icon-style">&#xe618;</span>北京市东城区景山前街4号<span class="iconfont icon-right">&#xe768;</span></p>
		</div>
		<div class="address border-bottom">
			<p class="address-txt"><span class="iconfont icon-style">&#xe634;</span>查看景点简介及开放时间<span class="iconfont icon-right">&#xe768;</span></p>
		</div>
		<div class="address-score">
			<span class="iconfont icon-faces">&#xe629;</span>

			<span class="iconfont icon-stars">&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;</span>
			<span class="scroe">4.9分</span>
			<span class="iconfont icon-right">&#xe768;</span>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				seen:true
			}
		},
		
		methods: {
			
			
		}
	}
	
	 
	
</script>
<style scoped>
	.address-info{
		margin-top: .2rem;
	}
	.address{
		width: 100%;
		height: .88rem;
		color: #212121;
		background: #fff;
		line-height: .88rem;
		padding-left: .28rem;
	}
	.address-score{
		width: 100%;
		height: .88rem;
		margin-top: .2rem;
		margin-bottom: .2rem;
		background: #fff;
		line-height: .88rem;
		padding-left: .28rem;
	}
	.scroe{
		color: deepskyblue;
		font-size: .3rem;
	}
	.icon-style{
		margin-right: .1rem;
		font-size: .38rem;
	}
	.icon-right{
		float: right;
		margin-right: 0.6rem;
	}
	.icon-faces{
		color: deepskyblue;
		font-size: .4rem;
	}
	.icon-stars{
		color: deepskyblue;
		font-size: .4rem;
	}
</style>