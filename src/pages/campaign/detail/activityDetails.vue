<template>
	<div class="activity-detail-page">
		
		<transition name="fade" id="header">
			<div class="header border-bottom" v-if="!show">
				<span class="header-left-back bcak-btn iconfont" @click="handlebckBtnClick">&#xe657;</span>
				<h1 class="header-title">{{productInfo.campaignName}}</h1>
			</div>
		</transition>

		<div class="activity-detail-page-main" id="detailPage">

			<div class="product-img-content">
				<img class="product-img" :src="productInfo.images"/>
				<div class="product-topbanner-mask"></div>
				<div class="product-img-infocon">
					<span class="product-img-issue">期号:67</span>
				</div>
			</div>

			<div class="product-content border-bottom">
				<div class="product-name">
					<span class="product-status" v-html=" productInfo.status === 'ONLINE' ? '进行中' : '已结束' "></span>{{productInfo.productInclude}}
				</div>
				<p class="product-prize">本期奖品:{{productInfo.productInclude}}</p>
				<div class="detail-grab-progresscon border-top">
					<div class="detail-grab-progress">
						<span class="progress-total-amount">总需人次：{{productInfo.totalCount}}</span>
						<span class="progress-left-amount">剩余人次：
							<span class="color-red">{{productInfo.remainCount}}</span>
						</span>
						<span class="progress-bar">
							<span class="process-bar-total"></span>
							<span class="process-bar-gain" :style="{width: [(productInfo.totalCount - productInfo.remainCount) / productInfo.totalCount * 100 ]+ '%'}"></span>
						</span>
					</div>
				</div>
			</div>

			<div class="cam-prddetail-group border-topbottom">
				<h3 class="cam-prddetail-title border-bottom">宝贝说明</h3>
				<div class="cam-prddetail-content">
					<li class="descroption-item-title">产品包含</li>
					<div class="descroption-item-contain">{{productInfo.productInclude}}</div>
				</div>
			</div>

			<div class="cam-prddetail-group border-topbottom">
				<h3 class="cam-prddetail-title border-bottom">景点介绍</h3>
				<div class="cam-prddetail-content">
					<h4 class="cam-descroption-title">小狐狸，你好</h4>
					<span class="cam-other-entrance iconfont">&#xe768;</span>
				</div>
			</div>

			<div class="cam-prddetail-group border-topbottom">
				<div class="cam-prddetail-content">
					<h4 class="cam-descroption-title">晒单</h4>
					<span class="cam-other-entrance iconfont">&#xe768;</span>
				</div>
			</div>

			<div class="cam-prddetail-group border-topbottom cam-margin-fixedbottom">
				<div class="cam-prddetail-content">
					<h4 class="cam-descroption-title">往期揭晓</h4>
					<span class="cam-other-entrance iconfont" @click="handleNewAnnounceBtn">&#xe768;</span>
				</div>
			</div>

			<div class="cam-bottomfixed-area">
				<router-link class="cam-status-button" to="/campaign/order">立即参与</router-link>
			</div>
			<span class="bcak-btn iconfont" v-if="show" @click="handlebckBtnClick">&#xe657;</span>
		</div>

	</div>
</template>

<script>

	export default {
		created: function() {
			this.$http.get('/static/campaign/activityProduct.json').then(response => {        	
	           	if(response.body.ret) {
	           		this.productInfo = response.body.data
	           	}
	        }, response => {
	            console.log("get index data error")
	        });
		},

		data() {
			return {
				show: true,
				productId: this.$route.params,
				productInfo: {}
			}
		},

		methods: {
			handlebckBtnClick: function() {
				this.$router.go(-1);
			},
			handleNewAnnounceBtn: function() {
				this.$router.push({path: "/campaign/newannounce"});
			}
		}

	}

</script>

<style scoped>
	.activity-detail-page {
		background-color: #f3f3f3;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;		
		background: #1ba9ba;
		opacity: 0.555556;
		z-index: 999;
	}

	.fade-enter-active, .fade-leave-active {
	  	transition: opacity .5s
	}

	.fade-enter, .fade-leave-to {
	  	opacity: 0
	}
	
	.header.botter-bottom::before {
		border-color: #1b7a8b;
	}
	
	.header-title {
		overflow: hidden;
		margin: 0 1rem;		
		line-height: .88rem;
		font-size: .32rem;
		white-space: no-wrap;
		text-overflow: ellipsis;
		text-align: center;
		color: #fff;
	}
	
	.bcak-btn {
		position: absolute;
		top: 0;
		left: 0;
		width: .84rem;
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		font-size: .36rem; 
		color: #fff;
	}
	
	.product-img-content {
		overflow: hidden;
		position: relative;
		min-height: 3.6rem;
		max-height: 4.1rem;
	}
	
	.product-img {
		width: 100%;
		min-height: 3.6rem;
	}
	
	.product-topbanner-mask {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: .93rem;
		color: #fff;
		background: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
	}
	
	.product-img-infocon {
		position: absolute;
		bottom: .1rem;
		padding: .1rem 0;
		width: 100%;
		color: #fff;
	}
	
	.product-img-issue {
		display: inline-block;
		height: .32rem;
		padding: 0 .04rem;
		margin: 0 .1rem;
		border: 1px solid #fff;
		bckground-color: rgba(0, 0, 0, 0.2);
		font-size: .24rem;
		line-height: .32rem;
		border-radius: .04rem;
	}
	
	.product-content {
		position: relative;
		margin-top: -.1rem;
		padding: .36rem .2rem .3rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
	}
	
	.product-content::before,
	.detail-grab-progresscon::before {
		border-color: #c9cccd;
	}
	
	
	.product-name {
		font-size: .32rem;
		line-height: .36rem;
	}
	
	.product-status {
		display: inline-block;
		height: .36rem;
		padding: 0 .06rem;
		margin-right: .1rem;
		font-size: .24rem;
		line-height: .36rem;
		vertical-align: .04rem;
		color: #fff; 
		background-color: #1fbdd0;
	}
	
	.product-prize {
		font-size: .24rem;
		line-height: .3rem;
		padding: .08rem 0 .36rem;
		color: #999;
	}
	
	.detail-grab-progresscon {
		padding: .3rem 0 .08rem;
	}
	
	.detail-grab-progress {
		position: relative;
		font-size: .24rem;
		color: #666;	
	}
	
	.progress-left-amount {
		position: absolute;
		top: .02rem;
		right: 0;
	}
	
	.progress-left-amount .color-red {
		color: #ff5353;
	}
	
	.progress-bar {
		position: relative;
		overflow: hidden;
		display: block;
		margin-top: .04rem;		
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
	

	.cam-prddetail-group {
		position: relative;
		margin-top: .2rem;
		padding: .01rem 0;
		background-color: #fff;
	}
	
	.cam-prddetail-group.border-topbottom::before,
	.cam-prddetail-group.border-topbottom::after,
	.cam-prddetail-title.border-bottom::before {
		border-color: #dadada;
	}
	

	.cam-prddetail-title {
		overflow: hidden;
		position: relative;
		height: .88rem;
		line-height: .88rem;
		font-size: .3rem;
		text-indent: .15rem;
		padding: 0 .2rem;
	}
	
	.cam-prddetail-title::after {
		content: "\0020";
		position: absolute;
		top: .31rem;
		left: .2rem;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		border-radius: .04rem;
	}
	
	.cam-prddetail-content {
		position: relative;
		margin: .2rem 0;
		font-size: .28rem;
		color: #333;
		line-height: .44rem;
		overflow: hidden;
		padding: 0 .2rem;
	}
	
	.descroption-item-contain {
		color: #888;
	}
	
	.cam-other-entrance {
		position: absolute;
		top: 50%;
		right: .16rem;
		font-size: .28rem;
		color: #bbb;
		transform: translate(0, -50%); 
	}
	
	.cam-margin-fixedbottom {
		margin-bottom: 1.08rem;
	}
	
	.cam-bottomfixed-area {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	
	.cam-status-button {
		display: block;
		height: .88rem;
		line-height: .88rem;
		font-size: .32rem;
		padding: 0 .2rem;
		text-align: center;
		color: #fff;
		background-color: #ff3850;
	}
	
</style>

