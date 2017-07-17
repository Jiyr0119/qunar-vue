<template>
	<div class="help-page">
		<div class="help-header">
			<a class="help-header-left iconfont" @click="handleBackBtnClick">&#xe657;</a>
	  		<h1 class="help-header-middle">计算详情</h1>
	  		<router-link to="/">
	  			<a class="help-header-right"><img src="../../../../assets/img/campaign/help-logo.png" class="help-header-logo"/><br>首页</a>
	  		</router-link>
		</div>
		<div class="formular border-bottom">
			<p class="lucky-num">
				幸运号码：
				<span>{{$route.params.id}}</span>
				<span class="formular-button fromularbutton" @click="handleOpen">计算公式</span>
			</p>
			<p class="formular-info">=
				<span class="fomular-hightlight">数值A</span>%
				<span class="fomular-hightlight">商品所需人次数</span>(取余)+10000001
			</p>
			<p class="formular-info">=
				<span class="fomular-hightlight">{{timeTotal}}</span>%
				<span class="fomular-hightlight">{{personTimes}}</span>(取余)+10000001
			</p>
			<p class="formular-info">=
				<span class="fomular-hightlight">{{$route.params.id}}</span>
			</p>
		</div>
		<formular :computs="computInfo"></formular>
		<div class="mask" v-if="seen">
			<div class="notice">
				<div class="close-button" @click="handleClose">X</div>
				<div class="notice-title">幸运号码计算公式</div>
				<ul class="notice-list">
					<li class="notice-item">
						<div class="notice-num">01</div>
						<div class="notice-info">
							奖品的最后一个号码认购完毕后，将公示该认购时间点前本站全部奖品的最后100个记录的参与时间（包括该奖品最后一个参与时间）；
       					</div>
					</li>
					<li class="notice-item">
						<div class="notice-num">02</div>
						<div class="notice-info">
							将这100个记录的参与时间按照时、分、秒、毫秒组合，然后相加，得到数值A（如19:23:54.124则是192354124）
       					</div>
					</li>
					<li class="notice-item border-bottom">
						<div class="notice-num">03</div>
						<div class="notice-info">
							数值A除以奖品总需人次数，得到一个余数，用这个余数加上原始数10000001，得到幸运号码。拥有该幸运号码者，获得该奖品。
      					</div>
					</li>
				</ul>
				<div class="guide">
					<p class="guide-item">什么是余数？</p>
					<p class="guide-item">当两个整数相除的结果不能以整数商表示时，余数是其“余留下的量”。</p>
					<p class="guide-item">举例：26除以4，商为6，余数为2，</p>
					<pre class="guide-item">　　　26=6×4+2。</pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import formulamain from "./formular"
	export default {		
		created: function(){
	        this.$http.get('/static/campaign/comput.json').then(response => {
	        	this.winningNo= response.body.data.winningNo;
	        	this.timeTotal= response.body.data.timeTotal;
	        	this.personTimes= response.body.data.personTimes;
	        	this.computInfo = response.body.data.computInfo;
	        }, response => {
	            console.log("get index data error")
	        });
		},

		data () {
			return {
				winningNo: [],
				timeTotal: [],
				personTimes: [],
				computInfo: [],
				seen: false
			}
		},

		components: {
			"formular": formulamain
		},

		methods: {
			handleOpen: function() {
				this.seen = true;
			},

			handleClose: function() {
				this.seen = false;
			},

			handleBackBtnClick: function() {
				this.$router.go(-1);
			}
		}
	}
</script>


<style scoped>
	.help-header {
	    position: relative;
	    background: #1ba9ba;
	    height: .8rem;
	    text-align: center;
	    color: #fff;
	    border-bottom: #1b7a8b .02rem solid;
	}

	.bcak-btn,
	.help-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .84rem;
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		font-size: .36rem; 
		color: #fff;
	}

	.help-header-middle {
		overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    height: .8rem;
	    line-height: .8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}

	.help-header-right {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: 38px;
	    line-height: .2rem;
	    font-size: .2rem;
	    text-decoration: none;
	    color: #fff;
	}

	.help-header-logo {
	    width: .56rem;
	    margin: .08rem .1rem 0 0;
	}

	.formular {
		padding: .4rem .2rem .3rem .2rem;
		background: #fff;	
	}

	.lucky-num {
		position: relative;
		line-height: .3rem;
		margin-bottom: .2rem;
		color: #ff3850;
		font-size: .3rem;
		font-weight: bold;
	}

	.formular-button {
		position: absolute;
		top: -.02rem;
		right: 0;
		font-weight: normal;
		color: #1ba9bb;
	}

	.fromularbutton:after {
		position: relative;
		top: -.04rem;
		content: "";
		display: inline-block;
		width: .12rem;
		height: .12rem;
		border-top: .02rem solid #1ba9bb;
		border-right: .02rem solid #1ba9bb;
		margin-left: .1rem;
		-ms-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.formular-info {
		line-height: .4rem;
		color: #666;
	}

	.fomular-hightlight {
		color: #ff3850;
	}

	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5)
	}

	.notice {
		position: relative;
	    top: 50%;
	    width: 4.8rem;
	    height: 7.28rem;
	    margin: -3.64rem auto 0 auto;
	    background: #fff;
	    -o-border-radius: .08rem;
	    -webkit-border-radius: .08rem;
	    -moz-border-radius: .08rem;
	    border-radius: .08rem;
	}

	.close-button {
		position: absolute;
	    right: -.3rem;
	    top: -.3rem;
	    width: .6rem;
	    height: .6rem;
	    line-height: .6rem;
	    background: rgba(0,0,0,.7);
	    text-align: center;
	    font-size: .3rem;
	    color: #fff;
	    -o-border-radius: .3rem;
	    -webkit-border-radius: .3rem;
	    -moz-border-radius: .3rem;
	    border-radius: .3rem;
	}

	.notice-title {
	    line-height: .42rem;
	    padding: .2rem 0 .1rem .16rem;
	    font-weight: bold;
	    color: #1ba9ba;
	}

	.notice-list {
    	padding: 0 .14rem 0 .2rem;
	}

	.notice-item {
	    padding-bottom: .28rem;
	}
	
	.notice-num {
	    position: relative;
	    width: .4rem;
	    height: .4rem;
	    line-height: .4rem;
	    float: left;
	    background: #1ba9ba;
	    -o-border-radius: .2rem;
	    -webkit-border-radius: .2rem;
	    -moz-border-radius: .2rem;
	    border-radius: .2rem;
	    text-align: center;
	    font-size: .24rem;
	    color: #fff;
	    -moz-transform: scale(0.75);
	    -webkit-transform: scale(0.75);
	    -o-transform: scale(0.75);
	    transform: scale(0.75);
	    -moz-transform-origin: left top;
	    -webkit-transform-origin: left top;
	    -o-transform-origin: left top;
	    transform-origin: left top;
	}

	.notice-item:not(:last-of-type) .notice-num::after {
	    content: '\0020';
	    position: absolute;
	    top: .38rem;
	    bottom: -1.68rem;
	    left: .19rem;
	    width: .02rem;
	    background: #1ba9ba;
	}

	.notice-info {
	    line-height: .32rem;
	    margin-left: .4rem;
	    font-size: .24rem;
	    color: #333;
	    word-break: break-all;
	    word-wrap: break-word;
	}

	.guide {
	    padding: .18rem .2rem 0 .2rem;
	}

	.guide-item {
	    line-height: .3rem;
	    font-size: .24rem;
	    color: #666;
	}

</style>
