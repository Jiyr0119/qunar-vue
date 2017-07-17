<template>
	<div class="header">
		<div class="header-title">
			<span class="single-line">{{headerInfo.text}}</span>
		</div>
		<div @click="handleClick" class="single-big">
			<span class="header-city iconfont">&#xe61a;</span>
		</div>
		<div class="header-price">
			<i class="header-money" v-if="fff==0">
				<em class="header-fuhao">￥</em>{{headerInfo.money}}
			</i>
			<i class="header-money" v-else>
				<em class="header-fuhao">￥</em>{{headerInfo.moneyother}}
			</i>
			<span class="header-pt" v-if="fff==0">{{headerInfo.version}}
				<em class="header-font">票面价{{headerInfo.moneys}}</em>
			</span>
			<span class="header-pt"v-else>{{headerInfo.versionother}}
				<em class="header-font">票面价{{headerInfo.moneysother}}</em>
			</span>
			<span class="header-coupon" v-show="fff==0" >
				<span class="header-complimentary">赠券</span>
				<span class="header-my">￥10</span>
			</span>
		</div>
	</div>
</template>

<script>

export default {
	props:["fff","headerInfo"],
	methods: {
		handleClick: function () {
			this.$emit("close");
		}
	}
}
</script>


<style scoped>
.header {
	padding-bottom: .3rem;
	overflow: hidden;
}

.header-title {
	display: block;
	margin-right: .6rem;
	padding: .3rem 0 .1rem .2rem;
	font-size: .34rem;
	line-height: .4rem;
}

.single-line {
	display: block;
	width: 320px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: .34rem;
	line-height: .4rem;
}

.single-big {
	position: absolute;
	top: 0;
	right: 0;
	float: right;
	display: block;
	padding: .3rem;
}

.header-city {
	display: block;
	width: .3rem;
	height: .3rem;
	color: #a4a4a4;
	font-size: .5rem;
	text-align: center;
}

.header-price {
	padding: 0 .2rem;
	height:.4rem;
}

.header-money {
	color: #ff8300;
	margin-left: .06rem;
	font-size: .36rem;
}

.header-fuhao {
	font-size: .24rem;
}

.header-pt {
	color: #9e9e9e;
	font-size: .24rem;
}

.header-font {
	text-decoration: line-through;
}

.header-coupon {
	border: .02rem solid #ff6300;
	font-size: .24rem;
	white-space: nowrap;
	cursor: default;
	border-radius: .04rem;
	margin-left: .1rem;
}

.header-complimentary {
	height: .36rem;
	padding: 0 .05rem;
	background: #ff6300;
	color: #fff;
	line-height: .36rem;
}

.header-my {
	padding-right: .1rem;
	height: .32rem;
	background: #fff;
	color: #ff6300;
	font-size: .24rem!important;
	line-height: .32rem;
}

</style>