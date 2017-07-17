<template>
	<div class="active-main">
		<div class="active-img">
			<img src="https://img1.qunarzz.com/piao/fusion/1706/8d/c33af08f4c1f2702.jpg_270x270_8ec6a463.jpg" class="img-active">
			<div class="img-infocon">
				<span class="img-issue">期号：27</span>
			</div>
		</div>
		<div class="prdcard-con border-bottom">
			<div class="prdcard-name">
				<span class="pracard-status end">已揭晓</span>150元酒店代金劵
			</div>
			<div class="prdcard-prdname">
				本期奖品：¥50去哪儿网酒店代金券一张（房订单满¥51以上可用）；使用规则：1.去哪儿网客户端购买酒店时抵扣现金，不予找零或退换；2. 含有【代金券】标签的报价均可使用。
			</div>
			<div class="grab-card">
				<div class="grab-card-title">
					<span class="lucky-number">{{index}}</span>
					<router-link class="comput-detail" :to="'/campaign/computDetails/' + index">
						计算详情
					</router-link>
				</div>
				<div class="grab-card-content">
					<div class="ellipsis">
						<span class="card-item-title">获奖者：</span>
						<span class="card-item-desc">nzmcvbs4407</span>
					</div>
					<div class="ellipsis">
						<span class="card-item-title">揭晓时间：</span>
						<span class="card-item-desc">2017-07-12 10:04:37</span>
					</div>
					<div class="grab-card-notjoin">您没有参加此次夺宝哦</div>
				</div>
			</div>
		</div>
		<div class="prddetail-group border-topbottom">
			<h3 class="prddetail-title border-bottom">宝贝说明</h3>
			<div class="prddetail-content">
				<li class="description-title">产品包含</li>
				<p class="prddetail-desc">¥150去哪儿网酒店代金券一张（房订单满¥51以上可用）；使用规则：1.去哪儿网客户端购买酒店时抵扣现金，不予找零或退换；2. 含有【代金券】标签的报价均可使用。</p>
				<li class="description-title">使用时间</li>
				<p>平日周末通用</p>
			</div>
		</div>
		<div class="prddetail-group border-topbottom">
			<h3 class="prddetail-title border-bottom">景点介绍</h3>
			<div class="prddetail-content">
				<a href="###">
					<h4 class="description-title">酒店代金劵</h4>
					<span class="other-entrance">&gt;</span>
				</a>
			</div>
		</div>
		<div class="prddetail-group border-topbottom">
			<div class="prddetail-content">
				<a href="###">
					<h4 class="description-title">晒单</h4>
					<span class="other-entrance">&gt;</span>
				</a>
			</div>
		</div>
		<div class="prddetail-group border-topbottom">
			<div class="prddetail-content">
				<a href="###">
					<h4 class="description-title">往期揭晓</h4>
					<span class="other-entrance">&gt;</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},

		props:["index"]
	}
</script>


<style scoped>
	.active-main {
		background: #ededed;
	}

	.active-img {
	    overflow: hidden;
	    position: relative;
	    min-height: 3.6rem;
	    max-height: 4.1rem;
	}

	.img-active {
	    width: 100%;
	    min-height: 3.6rem;
	}

	.img-infocon {
	    position: absolute;
	    bottom: .1rem;
	    padding: .1rem 0;
	    width: 100%;
	    color: #fff;
	}

	.img-issue {
	    display: inline-block;
	    height: .32rem;
	    padding: 0 .04rem;
	    margin: 0 .1rem;
	    border: 1px solid #fff;
	    background-color: rgba(0,0,0,0.2);
	    color: #fff;
	    font-size: .24rem;
	    line-height: .32rem;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}

	.prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .36rem .2rem .3rem .2rem;
	    background: #fff;
	    -webkit-border-radius: .1rem .1rem 0 0;
	    -moz-border-radius: .1rem .1rem 0 0;
	    border-radius: .1rem .1rem 0 0;
	}

	.prdcard-name {
	    font-size: .32rem;
	    line-height: .36rem;
	}

	.pracard-status {
	    display: inline-block;
	    height: .36rem;
	    padding: 0 .06rem;
	    margin-right: .1rem;
	    background-color: #ccc;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .36rem;
	    vertical-align: .04rem;
	}

	.pracard-status.end {
	    background-color: #ff3850;
	}

	.prdcard-prdname {
	    padding: .08rem 0 .36rem;
	    color: #999;
	    font-size: .24rem;
	    line-height: .3rem;
	}

	.grab-card {
	    overflow: hidden;
	    -webkit-border-radius: .04rem .04rem 0 0;
	    -moz-border-radius: .04rem .04rem 0 0;
	    border-radius: .04rem .04rem 0 0;
	}

	.grab-card-title {
	    position: relative;
	    height: .72rem;
	    padding: 0 .2rem;
	    background-color: #ff3850;
	    color: #fff;
	    font-size: .28rem;
	    line-height: .72rem;
	}

	.comput-detail {
	    position: absolute;
	    top: .06rem;
	    right: .2rem;
	    width: 1.4rem;
	    height: .54rem;
	    border: 1px solid #fff;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .58rem;
	    text-align: center;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}

	.grab-card-content {
	    padding: .12rem .2rem;
	    border-right: 1px solid #dadada;
	    border-bottom: 1px solid #dadada;
	    border-left: 1px solid #dadada;
	    font-size: .24rem;
	    line-height: .36rem;
	    -webkit-border-radius: 0 0 .04rem .04rem;
	    -moz-border-radius: .0 0 .04rem .04rem;
	    border-radius: .0 0 .04rem .04rem;
	}

	.ellipsis {
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}

	.card-item-title {
	    overflow: hidden;
	    display: inline-block;
	    float: left;
	    width: 1.5rem;
	    vertical-align: middle;
	}

	.card-item-desc {
	    vertical-align: middle;
	    margin-right: .2rem;
	}

	.grab-card-notjoin {
	    margin: .08rem 0;
	    height: .5rem;
	    background-color: #ededed;
	    color: #666;
	    line-height: .5rem;
	    text-align: center;
	}

	.prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	}

	.prddetail-title {
	    overflow: hidden;
	    position: relative;
	    height: .88rem;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .15rem;
	    padding: 0 .2rem;
	}

	.prddetail-title::after {
	    content: "\0020";
	    position: absolute;
	    top: .31rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}

	.prddetail-content {
	    position: relative;
	    margin: .2rem 0;
	    font-size: .28rem;
	    line-height: .44rem;
	    overflow: hidden;
	    padding: 0 .2rem;	
	}

	.description-title {
	    color: #333;
	}

	.prddetail-desc {
	    color: #888;
	}

	.other-entrance {
	    position: absolute;
	    top: 50%;
	    right: .16rem;
	    color: #bbb;
	    font-size: .28rem;
	    -webkit-transform: translate(0,-50%);
	    -moz-transform: translate(0,-50%);
	    -ms-transform: translate(0,-50%);
	    -o-transform: translate(0,-50%);
	    transform: translate(0,-50%);
	}
</style>
