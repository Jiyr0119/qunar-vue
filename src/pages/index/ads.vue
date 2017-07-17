<template>
	<div class="ads border-topbottom">
		<div class="ads-item border-right" v-for="(item, index) in adsInfo" :key="index + '_ads_item'">
			<router-link v-bind:to="{path: item.link}">
				<img class="ads-img" :src="item.imgUrl">
			</router-link>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {
     	adsInfo:[
     		{
     			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
     			link: "/sales/"
     		},{

     			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
     			link: "/campaign"
     		}
     	]
    }
  }
}
</script>


<style scoped>
	.ads {
		display: flex;
		background: #fff;
		margin-top: .2rem;
	}
	.ads-item {
		flex: 1;
		height: 0;
		overflow: hidden;
		padding-bottom: 21.5625%;
	}
	.ads-img {
		width: 100%;
	}
</style>
