<template>
  	<div class="cam-category border-bottom">
		<div class="cam-category-item" v-for="(item, index) in category" :key="index + '_cam-category_item'">
			<img class="cam-category-icon" :src="item.imageUrl" />
			<p class="cam-category-font">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data () {
			return {
				
			}	
		},
		
		props: ["category"]
	}
</script>


<style scoped>
	.cam-category {
		display: flex;
		background: #fff;
		overflow: hidden;
		justify-content: space-around;
		align-items: center;
		height:1.92rem;
	}
	
	.cam-category::before {
		border-color: #eaeaea;
	}

	.cam-category-item {
		flex: 1;
		text-align: center;
	    padding: .3rem 0;
	}
	
	.cam-category-icon {
		width: .9rem;
		height: .9rem;
		display: inline-block;
	}

	.cam-category-font {
		margin-top: .2rem;
		text-align: center;
		color: #212121;
	}
</style>
