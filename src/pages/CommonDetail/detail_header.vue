<template>
	<div class=detail-wrap>
		<div class="detail-header" @click="handleClick" v-for="(itemOne,index) in titleData" :key="index + 'header'">
			<img class="detailheader-img" :src="itemOne.picUrl" />
			<div class="detailheader-title">
				<span class="title">{{itemOne.name}}</span>
			</div>
			<div class="total-img">
				<span class="iconfont icon-img" >&#xe634;</span>{{swiperData.length}}
			</div>
		</div>
		<div class="detail-header-close iconfont" @click="handleSkipClick">&#xe685;</div>
		<div class="detailheader-mask" v-show="seen">
			<div class="swiper-wrap">
				<swiper :options="swiperOption" ref="mySwiper">
			        <swiper-slide v-for="(itemTwo,index) in swiperData" :key="index + 'detail_img'">
			        	<div class="img-wrapper">
			        		<img class="swiper-img" :src="itemTwo.imgUrl"/>
			        	</div>
			        </swiper-slide>
	    		</swiper>
		        <div class="swiper-button-prev" slot="button-prev" >
		        	<span class="iconfont">&#xe685;</span>
		        </div>
				<div class="swiper-button-next" slot="button-next" >
					<span class="iconfont">&#xe768;</span>
				</div>
	       	</div>
	       	<div class="mask-close" @click="seen=false">
	       		<span class="iconfont icon-close">&#xe621;</span>
	       	</div>
	       	<div class="swiper-pagination" slot="pagination"></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
		 	return{
		 		seen:false,
		 		swiperOption: {
		            autoplay: false,
		            direction : 'horizontal',
		            autoHeight: true,
			        paginationClickable :true,
			        prevButton:'.swiper-button-prev',
			        nextButton:'.swiper-button-next',
			        pagination : ".swiper-pagination",
			        paginationType: 'fraction'
	        	}
		 	}
		 },
		 
		 props:["titleData","swiperData"],
		 
		 methods: {
		 	handleClick: function() {
		 		return this.seen = true;
		 	},
		 	
		 	handleSkipClick:function() {
		 		window.history.back();
		 	}
		 }
	}
	
</script>
<style scoped>
	.detail-wrap{
		width: 100%;
	}
	.detail-header{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 55%;
	}
	.detailheader-img{
		width: 100%;
		vertical-align: top;
	}
	.detailheader-title{
		position: absolute;
		bottom: .26rem;
		left: .2rem;
	}
	.title{
		font-size: .32rem;
		color: #fff;
	}
	.total-img{
		position: absolute;
		bottom: .26rem;
		right: .2rem;
		width: 1.2rem;
		height: .4rem;
		background: rgba(0,0,0,0.5);
		border-radius: .2rem;
		font-size: .24rem;
		color: #fff;
		text-align: center;
		line-height: .4rem;
	}
	.detail-header-close{
		z-index: 100;
		position: absolute;
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		background: rgba(0,0,0,.6);
		border-radius: 50%;
		color: #FFF;
		text-align: center;
		line-height: .72rem;
	}
	.detailheader-mask{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #000;
		color: #fff;
		z-index: 99;
	}
	.swiper-wrap{
		width: 100%;
		height: 100%;
		margin-top: 2.9rem;
	}
	.img-wrapper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
	.swiper-img{
		width: 100%;
	}
	.mask-close{
		position: absolute;
		top: 1.5rem;
		right: .4rem;
		width: .5rem;
		height: .5rem;
		border-radius: 50%;
		text-align: center;
		background: rgba(51,51,51,.8);
		color: #fff;
		line-height: .5rem;
		font-size: .4rem;
	}
	.swiper-wrap .swiper-button-prev,.swiper-wrap .swiper-button-next{
		top: 88%;
		width: .8rem;
		height: .8rem;
		border-radius: 50%;
		background: rgba(51,51,51,.8);
		line-height: .8rem;
		text-align: center;
		font-weight: bold;
	}
	.detailheader-mask .swiper-pagination{
		bottom: 1.25rem;
		left:0;
	}
	.icon-img{
		margin-right: .05rem;
	}
	.icon-close{
		font-size: .52rem;
	}
</style>

