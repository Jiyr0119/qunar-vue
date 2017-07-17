<template>
	<ul class="newticket-container">
		<li class="newticket-item border-bottom" v-for="(item,index) in announces" :key="index + 'announce_item'">
		    <router-link :to="'/campaign/announceDetails/'+item.winningNo">
			<a href="###">
				<div class="newticket-item-imgcontainer">
					<img  v-lazy="item.pic" :alt="item.productName" class="newticket-loading newticket-item-img">
				</div>
				<div class="newticket-item-info">
					<h4 class="newticket-item-name">{{item.productName}}</h4>
					<p class="newticket-item-text">夺宝期号 : {{item.groupDrawNo}}</p>
					<p class="newticket-item-text">幸运号码 : 
						<span class="newticket-item-wincode">{{item.winningNo}}</span>
						<router-link :to="'/campaign/computDetails/'+item.winningNo">
							<a class="newticket-item-calculate" href="###">计算详情
							</a>
						</router-link>
					</p>
					<p class="newticket-item-text">获得者 : {{item.userName}}</p>
					<p class="newticket-item-text">揭晓时间 :{{date(item.raffleTime)}}</p>
				</div>
			</a>
			</router-link>
		</li>
	</ul>
</template>

<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>

<script>
	export default {
		data () {
			return {
				date : function(nS) {
					var now = new Date(nS),
						month = now.getMonth()+1, 
						date = now.getDate(),
						hour = now.getHours(), 
						minute = now.getMinutes(); 		
			 		return month+"月"+date+"日,"+hour+":"+minute;  
				}
			}
		},

		props: ["announces"]	 
	}
</script>

<style scoped>
	.newticket-item {
	    position: relative;
	    overflow: hidden;
	    padding: .2rem;
	}

	.newticket-item-imgcontainer {
    	float: left;
	}

	.newticket-item-img {
	    width: 1.8rem;
	    height: 1.8rem;
	    border-radius: .08rem;
	}

	.newticket-item-info {
	    margin-top: -.04rem;
	    margin-left: 2rem;
	}

	.newticket-item-name {
	    line-height: .4rem;
	    margin-bottom: .04rem;
	    font-size: .26rem;
	    font-weight: normal;
	    color: #333;
	}

	.newticket-item-text {
	    position: relative;
	    line-height: .36rem;
	    font-size: .24rem;
	    color: #999;
	}

	.newticket-item-wincode {
	    color: #ff3850;
	}

	.newticket-item-calculate {
	    position: absolute;
	    display: block;
	    top: -0.02rem;
	    right: 0;
	    padding: .02rem .1rem;
	    color: #999;
	}

</style>