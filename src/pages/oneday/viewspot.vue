<template>
	<div class="view-spot">
		<div class="view-top">
			<p class="city-popular">北京热门景点门票</p>
		</div>
		<div class="viewport-box" v-for="(item, index) in viewspot.viewspotInfo" :key="'index'+ '_viewspot'" v-if="viewspot.city == $store.state.city">
			<router-link :to="{path:item.link,query:{title:item.title, id:item.id}}">
				<div class="viewport-img">
					<img class="view-img" v-lazy="item.imgUrl">
					<span class="viewport-bookingflag">
						<span class="viewport-bookingtext">{{item.booktime}}</span>
					</span>
				</div>
				<div class="feature">
					<h4 class="viewsport-title">{{item.title}}</h4>
					<div class="viewsport-taglist"></div>
					<div class="viewport-comment">
						<span class="iconfont view-comment-star">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
						<span class="view-comments">{{item.comment}}</span>
					</div>
					<div class="viewport-price">
						<div class="viewport-cashlist"></div>
						<span class="view-yuan">
							&yen;
							<span class="view-price">{{item.price}}</span>
						</span>
						<span class="view-priceflag">起</span>
					</div>
					<div class="viewport-more">
						<span class="viewport-text">{{item.address}}</span>
					</div>
				</div>
			</router-link>
		</div>
		<a class="recommend-a">
			查看全部景点
			<span class="recommend-a-span iconfont">&#xe615;</span>
		</a>
	</div>
</template>

<script>

export default {

  data () {
    return {
    }
  },
  props:['viewspot']
}
</script>

<style scoped>
	.view-top{
		height: .96rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 0.02rem solid #f5f5f5;
		background: white;
		margin-top: .2rem;
	}
	.viewport-box {
		background: white;
		padding-top: .2rem;
		border-bottom: 0.02rem solid #f5f5f5;
	}
	.city-popular{
		position: relative;
		margin-left: .2rem;
		font-size: .36rem;
	}
	.city-popular::before {
		left: -.4rem;
	    position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}
	.city-popular::after {
		right: -.4rem;
	    position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}
	.feature {
		overflow: hidden;
	    position: relative;
	    height: 2rem;
	    padding-bottom: .2rem;
	    margin-left: 2.4rem;
        -webkit-box-flex: 1;
        background: white;
	}
	.viewport-img {
	    position: relative;
	    float: left;
	    width: 2rem;
	    height: 2rem;
	    margin-left: .2rem;

	}
	.view-img {
		width: 100%;
	}
	.viewport-bookingflag {
	    position: absolute;
	    left: -.08rem;
	    top: .08rem;
	    height: .36rem;
	    line-height: .36rem;
	    padding: 0 .06rem 0 .1rem;
	    background: #00bcd4;
	    color: #fff;
	}
	.viewport-bookingtext {
	    display: block;
	    font-size: .24rem;
	}
	.viewsport-title{
		color: #212121;
	}
	.viewsport-taglist {
	    position: relative;
	    margin-top: .08rem;
	    min-height: .36rem;
	    font-size: 0;
	}
	.viewport-comment {
    	margin-top: .4rem;
	}
	.viewport-price {
	    position: absolute;
	    right: .2rem;
	    bottom: .2rem;
	    height: .32rem;
	    line-height: .32rem;
	    text-align: right;
	    font-size: 0;
	    color: #9e9e9e;
	    width: 1.6rem;
	}
	.viewport-cashlist {
	    position: absolute;
	    right: -.1rem;
	    top: -.4rem;
	    font-size: 0;
	    color: #ff1200;
	}
	.view-yuan {
	    font-size: .22rem;
	    color: #ff8300;
	}
	.view-price {
	    padding-left: .04rem;
	    font-weight: bold;
	    font-size: .4rem;
	}
	.view-priceflag {
	    padding-left: .02rem;
	    font-size: .24rem;
	}
	.viewport-more {
	    position: absolute;
	    left: 0;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	}
	.viewport-text {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.recommend-a{
		position: relative;
		display: block;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .9rem;
	    text-align: center;
	    background: #fff;
	}
	.recommend-a-span{
		font-size: .22rem;
		color: #9e9e9e;
	}
</style>
