<template>
	<div class="recommend">
		<div class="recommend-title">
				<span class="iconfont icon-great">&#xe616;</span>
			来这儿推荐
		</div>
		<div class="recommend-content border-top" v-for="(item,index) in recommendData" :key="index + 'recomment'">
			<div class="recomment-content-title border-right" >
				<div class="title">{{item.title}}</div>
				<span class="title-item">{{item.item_one}}</span>
				<span class="title-item">{{item.item_two}}</span>
			</div>
			<div class="check">
				<button class="check-btn">查看</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["recommendData"]
	}
</script>

<style scoped>
	.recommend{
		background: #fff;
		margin-bottom: .2rem;
	}
	.recommend-title{
		height: .88rem;
		line-height: .88rem;
		font-size: .32rem;
		padding-left: .26rem;
	}
	.recommend-content{
		display: flex;
		padding: .2rem .2rem .24rem .24rem;
	}
	.recomment-content-title{
		width: 70%;
	}
	.title{
		margin-bottom: .2rem;
		font-size: .32rem;
	}
	.title-item{
		margin-right: .2rem;
		font-size: .24rem;
		color: #616161;
	}
	.check{
		width: 30%;
		text-align: center;
	}
	.check-btn{
		width: 1.6rem;
		height: 0.6rem;
		text-align: center;
		line-height: .6rem;
		background: orange;
		border: none;
		border-radius: .1rem;
		color: #fff;
	}
	.icon-great{
		display: inline-block;
		width: 0.54rem;
		height: 0.54rem;
		border-radius: 50%;
		background: lightpink;
		text-align: center;
		line-height: .54rem;
		font-size: .34rem;
		color: #fff;
	}
	
</style>