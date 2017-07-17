<template>
	 <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in data" :key="index + '_imgswiper_item'">
        	<div class="img-wrapper">
        		<img class="swiper-img" :src="item.imgUrl"/>
        	</div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
     	swiperOption: {
     		loop: true,
        autoplay: 3000,
        direction : 'horizontal',
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true
      }
    }
  },
  props:["data"]
}
</script>


<style scoped>
	.img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>