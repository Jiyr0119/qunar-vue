<template>
	<div class="formular-content border-top">
		<h3 class="content-title">数值A</h3>
		<p class="content-info">=商品的最后一个号码分配完毕时间点前本站全部商品的最后100个参与时间之和(包含该商品的最后一人次的参与时间)</p>
		<p class="content-info">截止该商品最后参与时间(2016-05-11 19:30:54)网站所有商品的最后100条支付时间记录</p>
		<ul class="list">
			<li class="list-item">
				<div class="item-name item-nametitle">昵称</div>
				<div class="item-time item-timetitle">参与时间</div>
			</li>
			<li class="list-item" v-for="(item, index) in computs" :key="index + 'comput'">
				<div class="item-name">{{item.username}}</div>
				<div class="item-time">{{item.date}}<span class="item-hightlight">({{item.code}})</span></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			 
			}
		},

		props: ["computs"]
	}
</script>


<style scoped>
	.formular-content {
		margin-top: .18rem;
		padding: .3rem .2rem;
		background: #fff;
	}

	.content-title {
		line-height: .5rem;
		margin-bottom: .04rem;
	}

	.content-info {
		line-height: .36rem;
		margin-bottom: .06rem;
		color: #666;
	}

	.list {
		padding-top: .12rem;
		font-size: .24rem;
	}

	.list-item {
		line-height: .4rem;
		color: #666;
	}

	.item-nametitle {
		line-height: .32rem;
		text-align: center;
		color: #999;
		margin-bottom: .06rem;
	}

	.item-name {
		overflow: hidden;
		float: right;
		width: 1.3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.item-timetitle {
		line-height: .32rem;
		margin-left: 1.2rem;
		color: #999;
		margin-bottom: .06rem;
	}

	.item-time {
		margin-right: 1.4rem;
	}
	
	.item-hightlight {
		color: #ff3850;
	}
</style>
