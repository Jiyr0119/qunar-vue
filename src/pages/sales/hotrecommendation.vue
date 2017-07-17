<template>
<div id="main">
	<div class="hotsales" id="js-hotsales">
		<div class="hotrecommendation border-top">
			<div class="navbar-hot border-bottom">
				<div class="hot-toplist" v-for="(hottitle,index) in dataInfo" :key="index + '_hot_title_name'">
					<div class="hot-navbar">
						<span class="hot-navbar-title">{{hottitle.navbarTitle}}</span>
					</div>
					<div class="hot-toplist">
						<ul class="hot-now">
							<li class="hot-now-li">
								<span @click="handleEventNowTitle" id="js-now-title" class="hot-now-title">{{hottitle.nowTitle}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="hostlist-items ">
				<div class="hotlist-item-flexbox" v-for="(hotItem,index) in hotproductInfo" :key="index + '_hot_list_item'">
					<div class="hostlist-img">
						<img  class="logo" v-lazy="hotItem.imgUrl" v-lazy:background-image="hotItem.imageSrc"/>
					</div>
					<router-link :to="'/onedaytour/detail/'+index" :id="index">
						<div class="hostlist-info border-bottom">
							<p class="hot-ticketnameinfo">{{hotItem.title}}</p>
							<div class="hot-priceinfo">
								<div class="hot-priceinfo-item">
									<span class="hot-nowprice">&yen;<em>{{hotItem.currentprice}}</em></span>
									<span class="hot-originprice">&yen;{{hotItem.originprice}}</span>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<a href="http://touch.piao.qunar.com/touch/list.htm?keyword=&cat=dist_city%3D%25E5%258C%2597%25E4%25BA%25AC%26from_area%3Dts_yunying%26from_value%3D_tehui_product" class="hot-moreproduct">更多当季热门推荐 >></a>
			<div class="ticket-price">
				<span class="prompt-icon iconfont icon-jinggao"></span>
				<strong class="prompt-info">
					票面价
				</strong>
				是指通过景区指定窗口售卖的纸质门票上标注的价格
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
  	data () {
	    return {
   			scroll: ''
		}
    },
    methods: {
    	handleEventNowTitle: function(e) {
			window.addEventListener('touchmove', e => e.preventDefault())
			this.hotsales = this.$el.querySelector("#js-hotsales");
			var mTop = this.hotsales.offsetTop,
				sTop = document.body.scrollTop,
    			result = mTop - sTop;
    		this.hotsales.style.position = "absolute"
    		this.hotsales.style.top = (mTop-result) + "px" ;
    	},
    	handlescrollchange() {
			this.scroll = document.body.scrollTop;
			var navbarhot = this.$el.querySelector(".navbar-hot"),
				hotsales = this.$el.querySelector("#js-hotsales"),
				mTop = hotsales.offsetTop,
				result = mTop - this.scroll;
			if( result < 0 ) {
				navbarhot.style.position = "fixed";
				navbarhot.style.top = "0px";
				navbarhot.style.zIndex = 10;
				navbarhot.style.width = 100+"%";
			}else{
				navbarhot.style.position = "static";
				navbarhot.style.top = "";
			}
        }
    },

    mounted() {
    	setTimeout(function(){
			window.addEventListener('scroll', this.handlescrollchange)
    	}.bind(this),100)
    },
    props:["dataInfo","hotproductInfo"]
}
</script>

<style scoped>
	.hotrecommendation {
		color:#333;
		font-size: .28rem;
		background:#f2f8fb;
		padding-top: .2rem;
		position:relative;
	}
	.navbar-hot {
		min-height: 1.2rem;
		background:#fff;
	}
	.hot-navbar {
		background: #fff;
		position: relative;
		left: .1rem;
	}
	.hot-navbar-title {
		color:#333;
		font-weight:bold;
		font-size:.3rem;
		line-height:.48rem;
	}
	.hot-toplist {
		min-height:.74rem;
		padding:.2rem 0 .1rem .1rem;
		background:#fff
	}
	.hot-now {
		overflow: hidden;
		background: #fff;
	}
	.hot-now-li {
		float:left;
		width:33.33%;
		margin-bottom:.2rem;
		padding-right:.24rem;
	}
	.hot-now-title {
		border: .02rem solid #0dc9df;
		color: #1ba9ba;
		display:block;
		font-size:.26rem;
		line-height:.5rem;
		text-align:center;
		border-radius:.04rem;
	}
	.navbarHot {
		position: relative;
	}
	.hotlist-item-flexbox {
		position: relative;
		width: 100%;
		display: flex;
		background: #fff;
	}
	.hostlist-img {
		width: 1.6rem;
		height: 1.6rem;
		padding: .2rem;
	}
	.hostlist-img img {
		width: 1.6rem;
		height: 1.6rem;
		display: block;
		background-size: cover;
	}
	.hostlist-info {
		padding: .2rem .2rem .2rem 0;
		flex: 1; 
	}
	.hot-ticketnameinfo {
		height:.88rem;
		line-height:.44rem;
		font-size:.32rem;
		margin-top:-.04rem;
		display:-webkit-box;
		overflow:hidden;
		text-overflow:ellipsis;
		color: #000;
	}
	.hot-priceinfo {
		position: relative;
		height: .76rem;
	}
	.hot-priceinfo-item {
		position: absolute;
		bottom: -.06rem;
	}
	.hot-priceinfo-item span {
		margin-right: .15rem;
		float:left;
	}
	.hot-nowprice {
		font-size: .24rem;
		color: #ff4500;
	}
	.hot-nowprice em {
		font-size: .48rem;
		margin-left: .02rem;
	}
	.hot-originprice {
		font-size:.24rem;
		color:#999;
		text-decoration:line-through;
		margin-top:.16rem
	}
	.hot-moreproduct {
		display:block;
		background:#fff;
		border-top:.02rem dashed #cfdddf;
		padding:0 .2rem;
		line-height:.88rem;
		height:.88rem;
		font-size:.28rem;
		color:#333;
		text-align:center;
		margin-bottom:.2rem;
		border-bottom:.02rem solid #cbdade
	}
	.ticket-price {
		position: relative;
		margin-top: .2rem;
		padding: .2rem;
		background: #fff;
		color: #333;
		font-size: .24rem;
		line-height: .3rem;
		text-align: center;
	}
	.prompt-info {
		font-weight: bold;
	}
</style>
