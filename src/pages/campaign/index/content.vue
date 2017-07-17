<template>
	<ul class="content-products-activity">		
		<li class="activity-item"  v-for="(item, index) in activityItem">		
			<router-link class="activity-item-content" :to="'/campaign/detail/'+item.productId">
				<div class="activity-img-wrap">
					<img class="activity-img" v-lazy="item.image" />
				</div>
				<div class="activity-info border">
					<h3 class="activity-name">{{item.productName}}</h3>		
					<div class="activity-grab-info">			
						<div class="activity-grab-progress">
							<span class="progress-total-amount">总需{{item.total}}</span>
							<span class="progress-left-amount">剩余{{item.remain}}</span>
							<span class="progress-bar">
								<span class="process-bar-total"></span>
								<span class="process-bar-gain" :style="{width:[(item.total - item.remain) / item.total * 100 + '%']}"></span>
							</span>
						</div>

						<router-link to="/campaign/order">
							<span class="activity-grab-btn-area">
								<span class="activity-grab-btn">一元夺宝</span>
							</span>
						</router-link>
					</div>	
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
	  	data () {
	    	return {
	     		progressBarWidth: 0
	    	}
	  	},

	    props: ['activityItem']
	}
</script>

<style scoped>
	.content-products-activity {
		min-height: 3.3rem;
		overflow: hidden;
		padding: .16rem .12rem .04rem;
		margin-bottom: 1rem;
	}

	.activity-item {
		position: relative;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
		width: 50%;		
		border-radius: .04rem;
	}
	
	.activity-item-content {
		display: block;		
		margin: 0 .08rem .16rem; 
	}

	.activity-img-wrap {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 61.64%;
	}

	.activity-img {
		width: 100%;
	}

	.activity-info {
		overflow: hidden;
		height: 1.38rem;
		background: #fff;
	}
	
	.activity-info.border::before {
		border-top: 0;
		border-color: #c9cccd;
	}

	.activity-name {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		height: .6rem;
		margin: .08rem .1rem 0;
		color: #333;
		font-size: .24rem;
		line-height: .3rem;
	}

	.activity-grab-info {
		position: relative;
		padding: 0 .1rem .2rem;
	}

	.activity-grab-progress {
		position: relative;
		width: 1.8rem;
		color: #666;
		font-size: .24rem;
	}

	.progress-total-amount,
	.progress-left-amount {
		transform: scale(.84);
	}

	.progress-total-amount {
		display: inline-block;
		margin-top: .04rem;
		margin-left: -.06rem;
	}

	.progress-left-amount {
		position: absolute;
		top: .04rem;
		right: -.04rem;
	}

	.progress-bar {
		position: relative;
		overflow: hidden;
		display: block;
		margin-top: .06rem;
		width: 1.74rem;
		height: .12rem;
		border: .02rem solid #ff5353;
		border-radius: .12rem;
	}

	.process-bar-total {
		position: absolute;
		height: 100%;
		z-index: 1;
		background: #fff;
	}

	.process-bar-gain {
		position: absolute;
		height: 100%;
		background: #ff5353;
	}

	.activity-grab-btn-area {
		position: absolute;
		right: -.04rem;
		bottom: 0;
		padding: .14rem 0; 
	}

	.activity-grab-btn {
		display: inline-block;
		width: 1.1rem;
		height: .54rem;
		background: #ff3850;
		color: #fff;
		font-size: .24rem;
		line-height: .54rem;
		text-align: center;
		border-radius: .04rem;
		transform: scale(.75);
	}

</style>
