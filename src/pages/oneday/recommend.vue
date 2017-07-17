<template>
	<div class="recommend">
		<div class="recommend-top">
			<div class="recommend-title">
				<h3 class="recommend-title-hot">{{$store.state.city}}热门线路推荐</h3>
			</div>
			<div class="recommend-top-ul">
				<div class="recommend-top-li">铁定成团<span class="iconfont recommend-icon1">&#xe662;</span></div>
				<div class="recommend-top-li">无自费<span class="iconfont recommend-icon2">&#xe619;</span></div>
				<div class="recommend-top-li">无购物<span class="iconfont recommend-icon3">&#xe6ab;</span></div>
			</div>
		</div>
		<div>
			<ul v-if="recommend.city == $store.state.city">
				<li v-for="(item,index) in recommend.recommendInfo" class="recommend-concent" :key="index + 'recommend'">
					<router-link :to="{path:item.link,query:{title:item.title, id:item.id}}">
						<div class="recommend-concent-imgbox">
							<img v-lazy="item.imgsrc" class="recommend-concent-img"/>
							<span class="recommend-concent-imgbox-title">{{item.alt}}</span>
						</div>
						<div class="recommend-details">
							<h4 class="recommend-details-title">{{item.title}}</h4>
							<div class="recommend-details-taglist">
								<span class="recommend-details-taglist-number">已售{{item.number}}</span>
								<span class="recommend-details-taglist-score">{{item.score}}分</span>
							</div>
							<div class="recommend-details-price">
								<span class="recommend-details-price1">
									￥
									<span class="recommend-details-price2">
										{{item.price}}
									</span>
								</span>
								<span class="recommend-details-price3">
									起
								</span></div>
							<div class="recommend-details-place">出发地 ：{{item.place}}</div>
						</div>
					</router-link>
				</li>
			</ul>
			<a class="recommend-a">
				查看全部一日游
				<span class="recommend-a-span iconfont">&#xe615;</span>
			</a>
		</div>
	</div>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: ["recommend"]
}
</script>


<style scoped>
	.recommend{
		background: white;
	}
	.recommend-top{
		margin-top: .2rem;
	}
	.recommend-title{
		padding: .3rem 0;
	    text-align: center;
	}
	.recommend-title-hot{
		position: relative;
	    display: inline-block;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .36rem;
	}
	.recommend-title-hot::before{
		left: -.4rem;
		position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}
	.recommend-title-hot::after{
		right: -.4rem;
		position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}
	.recommend-top-ul{
		overflow: hidden;
	    padding-bottom: .2rem;
	    text-align: center;
	    font-size: 0;
	}
	.recommend-top-li{
		display: inline-block;
	    padding: .06rem .2rem;
	    margin: 0 .2rem .1rem;
	    width: .96rem;
	    height: .34rem;
	    border: .02rem solid #e0e0e0;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .34rem;
	    -webkit-border-radius: .46rem;
	    -moz-border-radius: .46rem;
	    border-radius: .46rem;
	    position: relative;
	}

	.recommend-icon1, .recommend-icon2, .recommend-icon3 {
		position: absolute;
		left: .01rem;
		bottom: -.14rem;
		font-size: .24rem;
	}

	.recommend-concent{
		position: relative;
	    padding: .2rem .2rem 0 0;
	    margin-left: .2rem;
	}
	.recommend-concent::after{
		bottom: 0;
		left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #e0e0e0;
	    content: "";
    	position: absolute;
	}
	.recommend-concent-imgbox{
		position: relative;
	    float: left;
	    width: 2rem;
	    height: 2rem;
	    background-size: contain;
	}
	.recommend-concent-imgbox-title{
		position: absolute;
		left: -.08rem;
		top: .08rem;
		height: .36rem;
		line-height: .36rem;
		padding: 0 .06rem 0 .1rem;
		background: #00bcd4;
		color: #fff;
	}
	.recommend-concent-img{
		width: 100%;
	}
	.recommend-details{
		overflow: hidden;
	    position: relative;
	    height: 2rem;
	    padding-bottom: .2rem;
	    margin-left: 2.2rem;
	}
	.recommend-details-title{
		color: #212121;
	    font-size: .3rem;
	    line-height: .38rem;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.recommend-details-taglist{
		position: relative;
	    margin-top: .08rem;
	    min-height: .36rem;
	    font-size: 0;
	}
	.recommend-details-taglist-number,.recommend-details-taglist-score{
		display: inline;
	    padding: 0 .1rem;
	    color: #9e9e9e;
	    font-size: .26rem;
	    line-height: .36rem;
	}
	.recommend-details-taglist-number{
		padding-left: 0
	}
	.recommend-details-price{
		position: absolute;
	    right: 0;
	    bottom: .2rem;
	    height: .32rem;
	    line-height: .32rem;
	    text-align: right;
	    font-size: 0;
	    color: #9e9e9e;
	    width: 1.6rem;
	}
	.recommend-details-place{
		position: absolute;
	    left: 0;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	    color: #616161;
    	font-size: .24rem;
	}
	.recommend-details-price1{
		font-size: .22rem;
    	color: #ff8300;
	}
	.recommend-details-price2{
		padding-left: .04rem;
	    font-weight: bold;
	    font-size: .4rem;
	}
	.recommend-details-price3{
		padding-left: .02rem;
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
