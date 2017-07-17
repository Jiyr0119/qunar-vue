<template>
	<div>
		<header class="header">
	  		<a class="header-left" @click="handleBackFront">
	  			<div class="return"></div>
	  		</a>
	  		<div class="header-title">
	  			<span class="single-line">输入城市/景点/游玩主题</span>
	  		</div>
	  		<div class="header-right">
	  			<router-link :to="{path:headercity.href}">
	  				<span class="header-city">{{$store.state.city}}<i class="header-city-option"></i></span>
	  			</router-link>
	  		</div>
	  	</header>
	  	<div class="swiper-box">
	  		<swiper :options="swiperOption" ref="mySwiper">
		        <swiper-slide v-for="(item,index) in data" :key="index + 'data'">
		        	<div class="img-wrapper">
		        		<router-link :to="{path:item.link}">
		        			<img class="swiper-img" :src="item.imgUrl"/>
		        		</router-link>
		        	</div>
		        </swiper-slide>
		        <div class="swiper-pagination"  slot="pagination"></div>
		   </swiper>
	  	</div>

	</div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          loop: true,
              autoplay: 3000,
              direction: 'horizontal',
              autoHeight: true,
              pagination: '.swiper-pagination',
              paginationClickable:true
          }
      }
    },
    props: ["data","headercity"],
    methods: {
      handleBackFront: function() {
         window.history.go(-1);
      }
    }
  }
</script>


<style scoped>
	.header {
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 99;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #ccc;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    }
    .header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
    	border-top: 0.13rem solid #fff;
    	position: relative;
    	top:0.22rem;
	}
    .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
	.swiper-box{
		margin-top: .88rem;
	}
</style>
