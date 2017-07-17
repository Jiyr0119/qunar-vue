<template>
	<div class="index-produt border-top">
		<div class="produt-title border-top">推荐产品</div>
		<router-link to="sighthotel/detail">
			<div class="product-item" v-for="item in data">
				<div class="item-swiper">
					<img class="item-img" :src="item.imgUrl" alt=""/>			
				</div>
				<div class="item-name">{{item.name}}</div>	
			</div>
		</router-link>
		<a href="/" class="product-more border-top">暂无更多数据</a>	
	</div>
</template>

<script>

export default {
  data () {
    return {   	
    }
  },
  props: ["data"] 
}
</script>


<style scoped>
	.index-produt {
		background: #fff;
		margin-top: .2rem;
	}
	.produt-title {
		position: relative;
		padding: 0 .2rem;
		height: .78rem;
		color: #212121;
		font-weight: normal;
		font-size: .28rem;
		line-height: .78rem;
		text-indent: .6em;
	}
	.produt-title::before {
		content:"";
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: .2rem;
		width: .06rem;
		height: .5rem;
		margin-top: -0.16rem;
		background : #00bcd4;
		border-radius: 0.04rem;
	}
	.product-item {
		position: relative;
		padding: 0 .2rem;
	}

	.item-swiper {
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 43.66%;
	}
	.item-img {
		width: 100%;
	}
	.item-name {
		line-height: .8rem;
		font-size: .3rem;
		color: #212121;
	}
	.product-more {
		display: block;
		color: #616161;
		font-size: .3rem;
		line-height: .9rem;
		text-align: center;
		background: #fff;
	}	
</style>
