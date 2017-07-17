<template>
	<div class="cam-broadcast border-topbottom">
		<div class="cam-broadcast-icon iconfont">&#xe62f;</div>
		<div class="cam-broadcast-content">
			<div class="cam-broadcast-content-list" :style="{marginLeft:marginLeft+'px'}">
				<span class="cam-broadcast-content-item"  v-for="(item, index) in broadcast" :key="index + '_cam-broadcast_item'">
					{{item.userName+" 花"+item.groupDrawNo+"元 得到了"+item.productName}}
				</span>
			</div>		
		</div>
	</div>
</template>

<script>
	export default {
		created: function() {
			var _this = this;
			var tiemr = setInterval(function() {
				_this.marginLeft <= -10000 ? _this.marginLeft = 0 : _this.marginLeft--;
			}, 30)
		},

		data () {
			return {
				swiperOption: {
		     		loop: true,
		            autoplay: 1000,
		            direction: 'horizontal',
		            autoHeight: true,
		            pagination: '.swiper-pagination',
		            paginationClickable: true
		        },

		        marginLeft: 0
			}	
		},

		props: ["broadcast"]
	}
</script>


<style scoped>
	.cam-broadcast {
		display: flex;
		height: .46rem;
		padding: .12rem .2rem;		
	}

	.cam-broadcast::before,
	.cam-broadcast::after {
		border-color: #c9cccd;
	}
	
	.cam-broadcast-icon {
		float: left;
	    width: 10%;
	    height: .46rem;
	    line-height: .46rem;
	    color: #fc351d;
	    font-size: .6rem;
		border-right: .01rem solid #eaeaea;
	}

	.cam-broadcast-content {
		overflow: hidden;
		width: 90%;
		height: .46rem;
	    margin-left: .1rem;
   		color: #666;
   		font-size: .24rem;
	}
	
	.cam-broadcast-content-list {
		overflow: hidden;
		display: block;
		height: .46rem;
		flex-wrap: nowrap;
	}

	.cam-broadcast-content-item {
		line-height: .46rem;
		margin-right: .6rem;
	}
	
</style>
