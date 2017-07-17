<template >
	<div id="bodyWraper">
		<div  class="scroller body-main " @touchstart="handleTouch" @touchmove="handleEmitEvent">
			<router-link class="item border-bottom"  v-for="(ticket, index) in ticketLists" :key="'ticket' + index" :to="'oneday/detail/'+index">
				<img :src="ticket.imgUrl"/>
				<div class="details">
					<p>{{ticket.name}}</p>
					<div class="tags">全网推荐 休闲 五星</div>
					<div class="population">
						<p> 人气指数: <span>{{ ticket.sales}}</span></p>
					</div>
					<div class="collection">已收藏: {{ticket.marketPrice}}</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<!--js-->
<script>
	
	export default {
		data(){
			return{
				screenY:0
				
			}
		},
		props:["datas"],
		computed:{
			"ticketLists"(){
				return this.datas.data ? this.datas.data.ticketList : []
			}
		},
		updated(){
			new IScroll('#bodyWraper', {  scrollY: true, mouseWheel: false });
		},
		methods:{
			handleTouch(e){
				this.screenY = e.touches[0].screenY;
			},
			handleEmitEvent(e){
				let diffY = e.touches[0].screenY -this.screenY ;
				//滑动后触发父组件事件,显示或隐藏底部菜单
				if( Math.abs( diffY ) > 5){
					this.$emit("handleFootMenuShow",diffY)
				}
				this.screenY = e.touches[0].screenY
			}
		}
	}
	
</script>

<!--样式-->
<style lang="scss" scoped>
	.body-main{
		margin-bottom: .8rem;
		background: #FFFFFF;
	}
	.item{
		display: block;
		height: 2rem;
		width: 100%;
		box-sizing: border-box;
		color: #212121;
		position: relative;
		img{
			width: 1.6rem;
			float: left;
			margin: .2rem;
		}
		.details{
			margin-left: 1.8rem;
			color: #000000;
		    line-height: .36rem;
   			font-size: .3rem;	
   			padding: .2rem;
   			padding-left: 0;
   			 >p{
 	      	  display: -webkit-box;
	 		   overflow: hidden;
	   			 text-overflow: ellipsis;
	  			  -webkit-line-clamp: 2;
	   			 -webkit-box-orient: vertical;
   			 }	
   			 .tags{
   			 	font-size: .24rem;
   			 	line-height: .24rem;
   			 	color: rgb(0, 175, 199) ;
   			 	padding-top: .06rem;
   			 }
   			 .collection{
   			 	color: #9e9e9e;
   			 	position: absolute;
   			 	left: 2rem;
   			 	bottom: .2rem;
   			 	font-size: .2rem;
   			 }
   			 .population{
   			 	color: #9e9e9e;
   			 	position: absolute;
   			 	bottom: .2rem;
   			 	right: .2rem;
   			 	p{
   			 		font-size: .2rem;
   			 		span{
   			 			color: #ff8300;
   			 			font-size: .28rem;
   			 		}
   			 	}
   			 }
		}
	}
	#bodyWraper {
		z-index: 2;
		position: absolute;
		top: 1.72rem;
		bottom: 0;
		overflow: hidden;
		background: #e5e7e8;
		
	}
	.scroller{
		-webkit-transform:translate3d(0,0,0);
	}
	
</style>