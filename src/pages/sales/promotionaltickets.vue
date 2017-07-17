<template>
<div class="main">
<div class="sales">
	<div v-for="headeritem in tickettitleInfo">
		<div class="ticket-header">
			<p class="ticket-headerback-link" @click="handlebackclick">
				<span class="ticket-header-back"></span>
			</p>
			<h1 class="ticket-header-title">{{headeritem.headertext}}</h1>
		</div>
		<div class="ticket-navbar">
			<span class="ticket-title">{{headeritem.titletext}}</span>
				<router-link to="/city">
					<div class="ticket-nabar-link">
					<span class="ticket-linktext">{{$store.state.city}}</span>
					<span class="ticket-linkcorner"></span>
					</div>
				</router-link>
		</div>
	</div>
	<div class="ticket-productlist">
		<div class="ticket-salelist">
			<div class="ticket-saleitem" v-for="(item,index) in ticketproductInfo" :key="index+'ticket-saleitem'">
				<router-link :to="'/onedaytour/detail/'+index" :id="index">
					<div class="ticket-imgcontainer">
					<img class="ticket-saleitem-img" v-lazy="item.imgurl" v-lazy:background-image="item.lazyurl"/>
					<div class="ticket-hotsale">
						<span class="ticket-hotsale-text">{{item.hotsale}}</span>
					</div>
					</div>
					<div class="ticket-saleInfo">
						<p class="ticket-saleInfo-title">{{item.title}}</p>
						<div class="ticket-priceinfo">
							<div class="ticket-sale-qunarprice">
								&yen;<em class="ticket-now-price">{{item.newPrice}}</em>
							</div>
							<div class="ticket-originprice-container">
								<span class="ticket-coupon-container" v-if="item.coupon">
									<span class="ticket-coupon-text">{{item.coupontext}}</span>
									<span class="ticket-coupon-pricecontainer">
										&yen;<em class="ticket-coupon-price">{{item.couponPrice}}</em>
									</span>
								</span>
								<span class="ticket-origin-price">&yen;{{item.originPrice}}</span>
							</div>
						</div>
					</div>
					<a class="ticket-fulllink"></a>
				</router-link>
			</div>
		</div>
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

	  methods:{
  	handlescrollchange:function(){
  		this.ticketNavbar = this.$el.querySelector(".ticket-navbar");
  		this.scroll = document.body.scrollTop;
  		if(this.scroll >= 44){
	  		this.ticketNavbar.style.position = "fixed";
	  		this.ticketNavbar.style.top = 0;
	  		this.ticketNavbar.style.zIndex = 10;
  		}else{
  			this.ticketNavbar.style.position = "relative";
  		}
  	},

  	handlebackclick:function(){
  		this.$router.go(-1);
  	}
  	
    },

    mounted(){
    	setTimeout(function(){
    		window.addEventListener("scroll", this.handlescrollchange);
    	}.bind(this),100);
  		
  	},

    props: ["ticketproductInfo", "tickettitleInfo"]
}
</script>
<style scoped>
	.sales {
		position: relative;
		top:0;
	}
	.ticket-header{
		position: relative;
		height: .88rem;
		background: #00bcd4;
		border-bottom: #1b7a8b 1px solid;
		z-index: 20;
	}
	.ticket-header-back{
		position: absolute;
		left: .2rem;
		top: 0;
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.ticket-headerback-link{
		position: absolute;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
	}
	.ticket-header-title{
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	.ticket-navbar{
		width: 100%;
		position: relative;
		padding: .2rem;
		background-color: #fff;
		font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
		color:#333;
		font-size: .28rem;
		font-size: .3rem;
		background-color: #fff;
	}
	.ticket-title{
		line-height: .48rem;
		font-weight: bold;
	}
	.ticket-nabar-link{
		position: absolute;
		z-index: 3;
		right: .2rem;
		top: 0;
		padding: .2rem .4rem .2rem .2rem;
		line-height: .48rem;
		text-decoration: none;
		z-index: 10;
	}
	.ticket-linktext{
		color: #666;
		font-size: .28rem;

	}
	.ticket-linkcorner{
		 width: 0;
		 height: 0;
		 border-width: 5px 5px 0;
		 border-style: solid;
		 border-color: #666 transparent transparent;
		 display: inline-block;
		 margin-top: -5px;
	}
	.ticket-productlist{
		width: 100%;
	}
	.ticket-saleitem{
		color: #333;
		font-size: .28rem;
		line-height: 1;
		position: relative;
	}
	.ticket-imgcontainer{
		overflow: hidden;
		height: 3.1172rem;
		width: 100%;
		position: relative;
	}
	.ticket-saleitem-img{
		width: 100%;
		height: 100%;
		background-size: cover;  
	}
	.ticket-saleInfo{
		display: flex;
		width: 100%;
	}
	.ticket-saleInfo-title{
		padding: 0 .2rem;
		height: .88rem;
		line-height: .44rem;
		font-size: .32rem;
		word-break: break-all;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
		color: #333;
	}
	.ticket-saleInfo{
		padding: .2rem 0 .3rem;
	}
	.ticket-priceinfo{
		padding-right: .2rem;
		margin-top: -.04rem;
	}
	.ticket-sale-qunarprice{
		font-size: .24rem;
		color: #ff4500;
		text-align: right;
	}
	.ticket-now-price{
		font-size: .48rem;
		font-style: normal;
		text-align: right;
		display: inline-block;
	}
	.ticket-originprice-container{
		text-align: right;
	}
	.ticket-origin-price{
		line-height: .4rem;
		text-decoration: line-through;
		color: #999;
		font-size: .24rem;
		text-align: right;
	}
	.ticket-fulllink{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.ticket-hotsale{
		border-width: .18rem .08rem .18rem 0;
		border-style: solid;
		border-color: #fa8514 transparent #fa8514 #fa8514;
		position: absolute;
		bottom: .1rem;
		left: 0;
		width: 1.12rem;
	}
	.ticket-hotsale-text{
		display: inline-block;
		position: absolute;
		top: -.18rem;
		left: 0;
		padding: 0 .2rem;
		line-height: .36rem;
		color: #fff;
		font-size: .24rem;
	}
	.ticket-coupon-container{
		margin-right: .15rem;
		line-height: .4rem;
		border: 1px solid #ff6b62;
		font-size: .24rem;
		white-space: nowrap;
		margin-top: .12rem;
		text-align: center;
		color: #ff6b62;
	}
	.ticket-coupon-text{
		margin-right: 0;
		padding: 0 .02rem;
		color: #fff;
		background: #ff6b62;
		text-align: left;
		line-height: .4rem;
	}
	.ticket-coupon-pricecontainer{
		font-size: .24rem;
		white-space: nowrap;
		text-align: left;
	}
</style>
