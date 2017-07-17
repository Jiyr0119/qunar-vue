<template>
	<div class="hot-commend">
		<h2 class="hot-commend-title">热销推荐</h2>
		<div class="hot-commend-con">
			<ul class="hot-commend-list">
				<li class="hot-commend-list-item border-bottom" v-for="(hotrecommendes,index) in hotsight" :key="index+'_hot_commend_info'" >
					<router-link :to="hotrecommendes.link" :id="index">
						<div class="hotlist-img">
							<img :src="hotrecommendes.listImg" />
						</div>
						<div class="hotlist-infos">
							<div class="hotlist-infos-title">{{hotrecommendes.listInfoTitle}}</div>
							<div class="hotlist-infos-desc">{{hotrecommendes.listInfoDes}}</div>
						</div>
						<div class="hotlist-price">
							&yen;<em class="hotlist-num">{{hotrecommendes.price}}</em>
							<span class="hotlist-text">{{hotrecommendes.text}}</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="hot-modmore">
				<a href="#">查看所有产品</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		
	},
	props:["hotsight"]
}
</script>	

<style scoped>
	.hot-commend {
		color: #212121;
		font-size: .28rem;
	}
	.hot-commend-title {
		padding-left: .26rem;
		height: .8rem;
		line-height: .8rem;
		color: #212121;
	}
	.hot-commend-con {
		background: #fff;
	}
	.hot-commend-list-item {
		position: relative;
		overflow: hidden;
		height: 1.4rem;
		padding: .24rem;
	}
	.hotlist-img {
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem;
	}
	.hotlist-img img {
		width: 1.4rem;
		height: 1.4rem;
	}
	.hotlist-infos,.hotlist-price {
		margin-left: 1.6rem;
	}
	.hotlist-infos-title {
		margin-top:.04rem;
		margin-bottom: .1rem;
		color: #212121;
		font-size: .3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.hotlist-infos-desc {
		margin-bottom: .1rem;
		color: #9e9e9e;
		height: .4rem;
		line-height: .4rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.hotlist-price {
		margin-left: 1.6rem;
		color: #ff8300;
	}
	.hotlist-num {
		font-size: .36rem;
		padding: 0 .04rem;
	}
	.hotlist-text {
		font-size: .24rem;
		color: #9e9e9e;
	}
	.hot-modmore {
		margin-top: -.02rem;
		height: .88rem;
		line-height: .88rem;
		color: #00afc7;
		text-align: center;
	}
</style>
