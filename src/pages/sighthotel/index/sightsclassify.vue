<template>
    <div>
    	<swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(page, index) in pages" :key="index + '_icon_swiper_item'">
            	<div class="icon-container">
            		<div class="icon-wrapper" v-for="item in page">
            			<img :src="item.imgUrl" class="icon-img">
            			<p class="icon-title">{{item.title}}</p>
            		</div>
            	</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
         	swiperOption: {
                autoplay: false,
                direction : 'horizontal',
                autoHeight: true,
                paginationClickable :true
            }
        }
    },
    computed: {
        pages: function() {
            var pages = [];
            for (var i = 0; i < this.icons.length; i++) {
                var page = Math.floor(i / 8); 
                if (!pages[page]) { 
                    pages[page] = [] 
                }
                pages[page].push(this.icons[i]);
            }
            return pages;
        }
    },
    props: ["icons"]
}
</script>


<style scoped>
	.icon-container {
		overflow: hidden;
		padding-bottom: .4rem;
        height: 1.8rem;
        background: #fff;
	}
	.icon-wrapper {
		padding-top: .4rem;
		overflow: hidden;
		width: 20%;
		float: left;
	}
	.icon-img {
		width: .88rem;
		display: block;
		margin: 0 auto;
	}
	.icon-title {
		margin-top: .2rem;
		text-align: center;
		color: #212121;
		font-size: .28rem;
	}
    .recommend {
        display: flex;
        background: #fff;
    }
    .recomment-item {
        flex: 1;
        line-height: 1rem;
        text-align: center;
    }
</style>
