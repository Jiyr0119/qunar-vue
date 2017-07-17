<template>	
    <footer class="order-control-outer">
        <div class="order-booking-intro" @click="hidden = !hidden">
            <em>应付金额</em>
            <strong class="order-price">
                <em class="order-price-num">{{numberInfo}}</em>
                	夺宝币
                <input type="hidden" id="payAmount" value="5" name="payAmount">
            </strong>
            <span class="order-iconfont "><</span>
        </div>

        <a class="order-booking-btn">提交订单</a>

        <div class="order-booking-detail-outer" v-if="hidden">
            <div class="order-booking-detail">
                <div class="order-info-main">
                    <h2 class="order-info-title">【休闲轻食】小苏州千禧福团 320g*2盒（包邮）</h2>
                    <div class="order-info-note">
                        <em class="order-price-num">{{numberInfo}}</em>夺宝币
                    </div>
                </div>
                <input type="hidden" name="opType" value="saveOrder">                   
                <div class="order-info-sub">
                    <p>实付款（在线支付）</p>
                    <div class="order-info-price">
                        <em class="order-price-num">{{numberInfo}}</em>
                        夺宝币
                    </div>
                </div>
            </div>
        </div>
        
		<div class="order-mask" v-if="hidden" @click="handleHidden"></div>
    </footer>
</template>

<script>
	export default {
		data () {
			return {
				hidden: false
			}
		},

		methods: {
			handleHidden: function() {
				return this.hidden = false
			}
		},

		props:[ "numberInfo" ]
	}
</script>


<style scoped>
	.order-control-outer {
	    position: fixed;
	    z-index: 92;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 1rem;
	    background: #fff;
        border-top: 1px solid #eaeaea;
	}

	.order-booking-intro {
	    float: left;
	    font-size: .24rem;
	    line-height: 1rem;
	    text-indent: .2rem;
	    width: 50%;
	    z-index: 50;
	    background: #fff;
	}

	.order-price {
	    color: #ff4501;
	}

	.order-price-num {
	    margin-right: .08rem;
	    font-size: .32rem;
	}

	.order-booking-fold {
	    color: #c1c1c1;
	    font-size: .28rem;
	    vertical-align: -.04rem;
	}

	.order-booking-btn {
	    float: right;
	    border: 0 none;
	    background: #ff4501;
	    color: #fff;
	    font: normal .36rem/1rem Arial;
	    text-align: center;
	    width: 50%;
	}

	.order-booking-detail-outer {
	    position: absolute;
	    right: 0;
	    bottom: 1rem;
	    left: 0;
	    width: 100%;
	    background: #fff;
	    z-index: 50;
	}
	
	.order-mask {
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    z-index: -100;
	    background: rgba(0,0,0,.5);
	}

	.order-booking-detail {
	    padding: .15rem .2rem;
	}

	.order-booking-detail-outer .order-info-main,
	.order-booking-detail-outer .order-info-sub {
	    padding-right: 1.46rem;
	}

	.order-info-main {
	    position: relative;
	}

	.order-info-sub {
	    position: relative;
	    margin-top: .05rem;
	    color: #888;
	    font-size: .28rem;
	    line-height: .46rem;
	}

	.order-info-price {
	    color: #ff4500;
	    font-size: .24rem;
	    line-height: .42rem;
	    position: absolute;
	    top: 0;
	    right: 0;
	}

	.order-info-price .order-price-num {
	    font-size: .32rem;
	    color: #fc3b54;
	}
	
	.order-info-note {
	    color: #333;
	    font-size: .24rem;
	    line-height: .46rem;
	    position: absolute;
	    top: 0;
	    right: 0;
	}

</style>
