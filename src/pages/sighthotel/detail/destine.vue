<template>
	<div>
	    <div class="whitespace"></div>
	    <div class="fixbooking-con mpg-flexbox">
		    <div class="fixbooking-pricecon mpg-flexbox-item border-top">
		        <span class="fixbooking-priceitemsingle">
		            价格&nbsp;&nbsp;<em class="fixbooking-priceicon">¥</em><span class="fixbooking-price">628</span>&nbsp;起
		        </span>
		    </div>
		    <div class="fixbooking-btn mpg-flexbox-item" @click="handleBookingClick">
		        <a href="javascript:;"
		           class="fixbooking-btn-a">立即预订
		        </a>
		    </div>
		    <div class="weekend-collection"></div>
		</div>
	</div>
</template>

<script>

    export default {
        data () {
            return {
            	
            }
        },
        methods: {
        	handleBookingClick() {
        		this.$emit("bookshow");
        	}
        }

    }
</script>

<style scoped>
    .whitespace {
    	width: 100%;
    	height: 1.2rem;
    }
    .fixbooking-con {
		display: flex;
    	position: fixed;
    	z-index: 10;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .98rem;
		font-size: .24rem;
    }
	.fixbooking-pricecon {
		flex: 1;
		height: .98rem;
		background: #fff;
		text-indent: .2rem;
	}
	.fixbooking-priceitemsingle {
		line-height: .98rem;
		height: .98rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.fixbooking-priceicon {
		color: #ff8300;
   		font-size: .24rem;
	}
	.fixbooking-price {
		color: #ff9800;
    	font-size: .4rem;
	}
	.fixbooking-btn {
		flex: 1;
		line-height: .98rem;
		overflow: hidden;
		font-size: .4rem;
		text-align: center;
		color: #fff;
		background: #ff9800;
	}
	.fixbooking-btn-a {
		color: #fff;
	}
</style>

