<template>
	<div class="spot-box">
		<div class="spot-title">
			<span>必选景点推荐</span>
			<div class="spot-right">
				<router-link :to="{path:'/weekend/index'}">
					<span class="spot-right-title">全部景点</span>
					<span class="spot-right-arrow"></span>
				</router-link>
			</div>
		</div>
		<div class="spot-concent">
			<ul class="spot-concent-ul">
				<li v-for="(item,index) in spot.spotInfo" class="spot-concent-li" :key="index + 'spot'" v-if="spot.city == $store.state.city">
					<div class="spot-concent-box">
						<div class="spot-concent-img">
							<router-link :to="{path:item.link,query:{title:item.title, id:item.id}}">
								<img v-lazy="item.imgsrc" class="spot-concent-img-child"/>
							</router-link>
						</div>
						<div class="spot-concent-line-box">
							<div class="spot-concent-title">{{item.title}}</div>
							<div class="spot-concent-line">有<span class="spot-concent-item-line">{{item.line}}</span>条路线</div>
						</div>

					</div>

				</li>
			</ul>
			<div class="spot-concent-more">
				<router-link :to="{path:'/'}">
					<span class="spot-concent-more-btn">{{$store.state.city}}全部一日游</span>
				</router-link>
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
  props:["spot"]
}
</script>


<style scoped>
	.spot-box{
		margin-top: .2rem;
		background: white;
		overflow: hidden;
	}
	.spot-title{
		padding: 0 .2rem;
		height: .78rem;
		color: #000;
	    font-weight: normal;
	    font-size: .28rem;
	    line-height: .78rem;
	}
	.spot-icon {
		width: .40rem;
		height: .40rem;
		color: #08bed5;
	}
	.spot-icon .spot-recommend {
		color: #000;
		font-size: .32rem;
		margin-left: .08rem;
	}
	.spot-right{
		float: right;
	    font-size: .26rem;
    	line-height: .78rem;
    	margin-right: .2rem;
	}
	.spot-right-title{
		float: left;
		color: #616161;
	}
	.spot-right-arrow{
		float: left;
		margin-top: .28rem;
		margin-left: .1rem;
		transform: rotateZ(-135deg);
		width: .15rem;
		height: .15rem;
		color: #616161;
		border-left: .04rem solid #616161;
		border-bottom: .04rem solid #616161;
	}
	.spot-concent{
		padding: 0 .2rem;
    	background: #fff;
	}
	.spot-concent-ul{
		overflow: hidden;
    	margin-left: -.1rem;
	}
	.spot-concent-li{
		width: 33.33%;
		float: left;
	}
	.spot-concent-box{
		margin-left: .1rem;
	}
	.spot-concent-line-box{
		height: 1rem;
	}
	.spot-concent-img{
		overflow: hidden;
	    width: 100%;
	    height: 0;
	    padding-bottom: 71.8%;
	}
	.spot-concent-img-child{
		width: 100%;
	}
	.spot-concent-title{
		text-align: center;
		margin-top: .14rem;
		font-size: .28rem;
    	color: #212121;
    	overflow: hidden;
	    height: .32rem;
	    line-height: .32rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;

	}
	.spot-concent-line{
		text-align: center;
		height: .34rem;
	    line-height: .34rem;
	    font-size: .24rem;
	    color: #9e9e9e
	}
	.spot-concent-item-line{
		color: #00afc7;
	}

	.spot-concent-more{
		margin-bottom: .24rem;
    	text-align: center;
	}
	.spot-concent-more-btn{
		display: inline-block;
	    height: .6rem;
	    padding: 0 .3rem;
	    border: .01rem solid #bdbdbd;
	    border-radius: .12rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .6rem;
	    text-align: center;
	}
</style>
