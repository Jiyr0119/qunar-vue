<template>
	<div class="product">
		<div class="product-title border-bottom">
			<span class="iconfont icon-ticket">&#xe645;</span>
			热销组合产品
		</div>
		<div class="product-content border-bottom" v-for="(item,index) in data" :key="index + 'product'"  :id="index" @click="handleClick"  :style="object_height" >
			<div class="content-first" >
				<span class="productcontent-title">{{item.title}}<span class="title-item">{{item.title_item}}</span></span>
				<span class="productcontent-money">&yen{{item.price}}<span class="money-item">起<span class="iconfont icon-downs" :id="'icon'+index">&#xe64b;</span></span></span>
			</div>
			<div class="product-sell">
				<div class="sell-title border-right">
					<div class="title">{{item.content_title}}</div>
					<span class="title-item">{{item.item_one}}</span>
					<span class="title-item">{{item.item_two}}</span>
				</div>
				<div class="check">
					<button class="check-btn">查看</button>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return　{
				seen:false,
				object_height:{
					height:".8rem"
				}
			}
		},
		
		methods: {
			handleClick: function(e) {
				var id=e.currentTarget.id
				var height = document.getElementById(id).style.height;
				if(height == "0.8rem"){
					document.getElementById(id).style.height = "100%";
				    document.getElementById("icon"+id).innerHTML = "&#xe667;"
					
				}else{
					document.getElementById(id).style.height = ".8rem";
					document.getElementById("icon"+id).innerHTML = "&#xe64b;"
				}
			}
		},
		
		props:["data"]
	
	}
</script>

<style scoped>
	.product{
		overflow: hidden;
		margin-bottom: .2rem;
		background: #fff;
	}
	.product-title{
		width: 100%;
		height: .6rem;
		padding: .24rem;
		color: #333333;
		font-size: .32rem;
		line-height: .6rem;
	}
	.product-content{
		overflow: hidden;

	}
	.content-first{
		padding: .24rem .2rem;
		height: .4rem;
		line-height: .4rem;
		display: flex;
	}
	.productcontent-title{
		width: 80%;
		float: left;
		font-size: .3rem;
	}
	.title-item{
		margin-left: .2rem;
		color: #888;
		font-size: .24rem;
	}
	.productcontent-money{
		width: 20%;
		font-size: .36rem;
		text-align: right;
		color: orange;
	}
	.money-item{
		color: #888;
		font-size: .24rem;
	}
	.product-sell{
		width: 100%;
		height: 1.2rem;
		background: #F5F5F5;
		display: flex;
		padding: .2rem .2rem .24rem .24rem;
	}
	.sell-title{
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
		height: .6rem;
		text-align: center;
		line-height: .6rem;
		background: orange;
		border: none;
		border-radius: .1rem;
		color: #fff;
	}
	.icon-ticket{
		display: inline-block;
		width: .54rem;
		height: .54rem;
		border-radius: 50%;
		background: lightskyblue;
		text-align: center;
		line-height: .54rem;
		font-size: .34rem;
		color: #fff;
	}
</style>