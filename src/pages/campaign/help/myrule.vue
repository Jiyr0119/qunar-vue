<template>
	<div class="help-main"> 
	    <ul class="help-tab-items border-bottom"> 
		    <li class="help-tab-item border-right " @click="handleliHidden" :class="{active:seen}">活动规则</li> 
		    <li class="help-tab-item" @click="handleliShow" :class="{active:!seen}">常见问题</li> 
	    </ul> 
	  	<div class="my-rule border-bottom" v-if="seen"> 
	    	<h3 class="my-rule-title">一元夺宝</h3> 
		    <div class="my-rule-desc">
		       去哪儿网一元夺宝活动中，参与者支付1元即可购买1张去哪儿门票1元代金券，并同时获赠1次抽奖机会。
		    </div> 
		    <h3 class="my-rule-title">活动规则</h3>
		    <div class="my-rule-items" >
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">01</span> 
			        <p class="my-rule-item-info">用户购买门票代金券产品，每支付1元将获得1元门票代金券1张，同时获赠1次抽奖机会（以夺宝码的形式发放给用户）；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">02</span> 
			        <p class="my-rule-item-info">用户购买门票代金券产品，非因法定原因或产品提供方过错不可退款；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">03</span> 
			        <p class="my-rule-item-info">参与记录用户可在活动页面左下角“我的夺宝记录”查看，“我的夺宝记录”为活动方官方认定的个人查看夺宝结果路径；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">04</span> 
			        <p class="my-rule-item-info">每个奖品每期只产生一个幸运夺宝码，持有该码的用户获得该期奖品一份；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">05</span> 
			        <p class="my-rule-item-info">中奖用户请于30个自然日内在【我的夺宝记录】中自行兑奖，逾期视为放弃中奖资格；现金券、抵用券类奖品系统将会自动发放至用户去哪儿网账户中，请注意查收；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">06</span> 
			        <p class="my-rule-item-info">若某件奖品的抽奖机会60天内未分配完毕，则去哪儿网有权取消该件商品的抽奖活动，用户可在“我的夺宝记录”中查看活动进度；</p> 
		        </div>
		        <div class="my-rule-item"> 
			        <span class="my-rule-item-flag">07</span> 
			        <p class="my-rule-item-info">本活动所有门票类奖品非因法定原因或产品提供方过错（如自然灾害等不可抗力、园区关门等），不可改期换票，请用户在兑奖时确认好行程。</p> 
		        </div>

			</div> 
			<div class="my-rule-tips"> 
		        <h3 class="my-rule-title">Tips</h3> 
		        <div class="my-rule-tips-desc">
		     	  当商品所有夺宝码发放完成后，去哪儿网会根据最后一个夺宝码的发放时间，计算出当前奖品的幸运夺宝码，持有该码的用户，可获得该奖品1份。
		        </div> 
			</div> 
		</div>
		
		<div class="my-question" v-else>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">什么是1元夺宝？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">去哪儿网一元夺宝活动中，参与者支付1元即可购买1张去哪儿门票1元代金券，并同时获赠1次抽奖机会。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">1元夺宝怎么玩？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">只需3步：<br>1、1元购买门票1元代金券<br>2、获得抽奖机会<br>3、等待开奖</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">一元夺宝每期开几个幸运夺宝码？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">一元夺宝每期只开1个幸运夺宝码，您可通过多次购买门票代金券获得更多抽奖机会，最终幸运夺宝码则是在参与抽奖的所有夺宝码中计算出。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">中奖夺宝码是怎样计算的？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">幸运夺宝码计算公式：<br>1、奖品的最后一个夺宝码发放完毕后，将公视该认购时间点前本站全部奖品的最后100个记录的参与时间（包括该奖品最后一个参与时间）；<br>2、将这100个记录的参与时间按照时、分、秒组合，然后相加，得到数值A（如17:42:09则是174209）；<br>3、数值A除以奖品总需人次数，得到一个余数，用这个余数加上原始数10000001，得到幸运夺宝码。拥有该夺宝码的用户，获得该奖品。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">一元夺宝是公平公正公开的吗？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">一元夺宝的夺宝过程是完全透明的，您可以随时查看每个商品的参与人数、参与次数、参与名单及幸运号码信息等记录。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">怎样查看是否成为幸运用户？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">中奖后，您会即时收到由【去哪儿网】发出的中奖提醒短信；<br>此外，您还可以打开【去哪儿旅行App】——查看最上方滚动的页面，选择【一元夺宝】点击进入——在左下角【我的夺宝记录】里查看个人中奖状态。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">怎样领取夺宝获得的奖品？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">1、景点类：请于30个自然日内，在【我的夺宝记录】中自行兑奖，逾期均视为放弃使用。（温馨提示：请在兑奖前确定好出行日期，出票后不退不换。）；<br>2、食品类：请于30个自然日内，在【我的夺宝记录】中自行兑奖，逾期均视为放弃使用。（温馨提示：请在兑奖时仔细填写发货地址和个人信息，发货后不退不换，若由于您自行操作造成退换货问题，概不负责。）；<br>3、机酒火券、现金券类：系统将会自动充值到您的账户，请在APP-【我的】-【账户余额】里查看；<br>4、门票代金券类：我们将在1-2个工作日内发到您的账户，请在APP-【我的】-【代金券】里查看。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">奖品可改期或者退换吗？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">本次活动所有门票类奖品非不可抗力因素（如自然灾害、园区关门等），不可改期以及退换票，请在兑奖时确认好自己的行程。</p> 
			</div>
			<div class="my-question-item"> 
			    <span class="my-question-desc-qflag">Q</span> 
			    <p class="my-question-desc-question">如果一件奖品的众筹很久都没有达到总需人次怎么办？</p> 
			    <span class="my-question-desc-aflag">A</span> 
			    <p class="my-question-desc-answer">若某件奖品的抽奖机会60天内未分配完毕，则去哪儿网有权取消该件商品的抽奖活动，用户可在“我的夺宝记录”中查看活动进度。</p> 
			</div>			    
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			 	seen: true,
			}
		},

		methods: {
			handleliHidden: function(){
				return this.seen = true
			},

			handleliShow: function() {
				return this.seen = false
			}
		}
	}
</script>

<style scoped>
	.help-main {
	    overflow: hidden;
	    background: #fff;
	}

	.help-tab-items {
	    overflow: hidden;
	    position: relative;	
	}

	.help-tab-item {
	    position: relative;
	    height: .74rem;
	    line-height: .74rem;
	    width: 50%;
	    float: left;
	    text-align: center;
	    color: #333;
	}

	.active:after {
		content: "";
		position: absolute;
	    left: 50%;
	    bottom: 0;
	    margin-left: -.65rem;
	    width: 1.3rem;
	    height: .04rem;
	    background: #1ba9ba;
	}

	.my-rule {
	    position: relative;
	    padding: .06rem .2rem 0 .2rem;	    
	}

	.my-rule-title {
	    position: relative;
	    display: inline-block;
	    margin: .26rem 0 .1rem 0;
	    padding: 0 .1rem;
	    height: .36rem;
	    background-color: #1ba9ba;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .36rem;
	}

	.my-rule-title::after {
	    content: "\0020";
	    position: absolute;
	    right: -.18rem;
	    width: 0;
	    height: 0;
	    border-width: .18rem .18rem .18rem  0;
	    border-style: solid;
	    border-color: #1ba9ba transparent #1ba9ba;
	}

	.my-rule-desc , .my-rule-tiems{
		position: relative;
	    font-size: .24rem;
	    line-height: .3rem;
	}

	.my-rule-item:not(:last-child) {
    	margin-bottom: .28rem;
	}

	.my-rule-item-flag, .my-question-desc-qflag, .my-question-desc-aflag {
	    float: left;
	    display: inline-block;
	    width: .4rem;
	    height: .4rem;
	    background-color: #1ba9ba;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .4rem;
	    text-align: center;
	    border-radius: .2rem;
	    transform: scale(.75);
	    transform-origin: left top;
	}

	.my-rule-item-info {
    	margin-left: .4rem;
	}

	.my-rule-tips {
	    padding: 0 .2rem .4rem .2rem;
	    background: #f2f2f2;
	}

	.my-rule-tips-desc {
	    margin-top: -.18rem;
	    padding: .14rem .2rem;
	    background-color: #fae6c8;
	    color: #f1670a;
	    font-size: .2rem;
	    line-height: .3rem;	
	}

	.my-rule-tips .my-rule-title {
    	background-color: #f37622;
	}

	.my-rule-tips .my-rule-title::after {
    	border-color: #f37622 transparent #f37622;
	}

	.my-question {
     	padding: 0 .2rem .3rem .2rem;
	}

	.my-question-item {
    	margin-top: .24rem;
	}

	.my-question-desc-qflag, .my-question-desc-aflag {
   	 	margin-top: .06rem;
 	}

 	.my-question-desc-question, .my-question-desc-answer {
	    margin-left: .4rem;
	    margin-bottom: .1rem;
	    line-height: .4rem;
	    min-height: .4rem;
	    font-size: .28rem;
	}

	.my-question-desc-aflag {
    	background: #8dd4dc;
	}

	.my-question-desc-aflag {
    	margin-top: .06rem;
	}

	.my-question-desc-answer {
    	color: #666;
	}


</style>