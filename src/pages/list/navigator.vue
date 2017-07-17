<template>
<div>
<div class="nav" :class='{"primary-position":primaryStyle}'>

	<div class="primary-nav border-topbottom" >
		<div class="primary-item border-right " @click="allClassClick">
			<span>全部分类</span>
			<span  class="triangle-show" ></span>
			<span  class="triangle-hide" ></span>
		</div>
		<div class="primary-item" @click="handleOrderClick">
			<span>推荐排序</span>	
			<span  class="triangle-show"></span>
			<span  class="triangle-hide"></span>
		</div>		
	</div>	

	<div id="wrapper"  v-show="show">
		<div class="subnav"   id="scroller" >
			<div :class='{"sub-items":true,  "border-bottom":true, "checked":check[index]}'  v-for="(item,index) in subnavInfo" @click="handleSubnavItemClick(index)" >
				<img class="subnav-item-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				{{item.title}}	
				<span class="count">
					{{item.visitedNum}}
				</span>
			</div>
		
		</div>
	</div>	

	<div id="order-wrapper" v-show="orderShow">
		<div id="order-scroller" @click="handleOrderItemClick">
			<div class="order border-bottom" :class='{"order-checked":orderCheck[0]}' @click="handleOrderCheckeda">{{orderA}}</div>
			<div class="order border-bottom" :class='{"order-checked":orderCheck[1]}' @click="handleOrderCheckedb">{{orderB}}</div>
			<div class="order border-bottom" :class='{"order-checked":orderCheck[2]}' @click="handleOrderCheckedc">{{orderC}}</div>
		</div>
	</div>

	
	<threenav :threeInfo="threeInfo" :show="show" @threenavClick="subThreenavClick"></threenav>
</div>

</div>
</template>

<script>
import threenav from "./threenav";
import "../../utils/iscroll-lite.js";

export default {

	created(){
		var h = 44;
		window.onscroll = function(){
		 	//获取页面滚走的距离
		 	var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		 	if( sTop > h ){
		 		this.primaryStyle = true;
		 	}else{
		 		this.primaryStyle = false;
		 	}
		}.bind(this)
	},

	updated() {
		new IScroll("#wrapper",{scrollX:false,scrollY:true,mouseWheel:true});
		new IScroll("#order-wrapper",{scrollX:false,scrollY:true,mouseWheel:true});
		
	},

	data () {
		return {
			i : 0,
			threeInfo:[],
			check:[true], //给每一项都要加一个不同的而不是加的都是一样的
			orderCheck:[true],
			primaryStyle:false,
			subnavStyle: false,
			orderA:"推荐排序",
			orderB:"离我最近",
			orderC:"人气最高"
		}
	},

	props:["subnavInfo","show","orderShow","showMask"],

	methods: {
	  	allClassClick() {
	  		this.$emit("ClassClick");
	  	},
	  	handleOrderClick() {
	  		this.$emit("orderClick");
	  	},
	  	subThreenavClick() {
	  		this.$emit("subThreenav");
	  	},
	  	handleSubnavItemClick(index){
	  		this.check = [];
	  		this.check[index] = true;
	  		this.i = index
	  		this.$http.get('/static/list.json').then(response => {
        	this.threeInfo = response.body.data.subnavinfo[this.i].content
	        }, response => {
	             console.log("get index data error")
	        })
		},
	
	  	handleOrderItemClick() {
	  		this.$emit("orderItemClick");
	  	},
	  	handleOrderCheckeda() {
	  		this.orderCheck=[];
	  		this.orderCheck[0]=true;
	  		this.$emit("orderAClick",this.orderA)
	  	},
	  	handleOrderCheckedb() {
	  		this.orderCheck=[];
	  		this.orderCheck[1]=true;
	  		this.$emit("orderBClick",this.orderB)
	  	},
	  	handleOrderCheckedc() {
	  		this.orderCheck=[];
	  		this.orderCheck[2]=true;
	  		this.$emit("orderCClick",this.orderC)
	  	}
	},

	components: {
		"threenav" : threenav
	},

	destroyed() {
		window.onscroll = null;
	}
}
</script>

<style scoped>
	.nav{
		z-index:5;
		position: absolute;
		/*height: 100%;*/
		width: 100%;
	}
	.primary-nav{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		display: flex;
		font-size: .28rem;
		background: #fff;
	}
	.primary-item{
		flex: 1;
		text-align: center;
		position: relative;
	}
	.triangle-show{
		display: block;
		border: .08rem solid transparent;
		border-top-color: #666;
		position: absolute;
		right: 1.1rem;
    	top: .35rem;
	}
	.primary-position{
		position: fixed;
		top: 0;
		left: 0;
	}
	/*一级导航样式完成*/
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0, .35);
		z-index: 0;
	}
	/*蒙层*/
	#wrapper{
		width: 50%;
		height: 4.8rem;
		background: #fff;
		overflow: hidden;
	}
	.subnav{
		width: 100%;
		min-height: 100%;
		background: #fff;	
	}
	.sub-items{
		height: .8rem;
		line-height: .8rem;
	}
	.subnav-item-icon{
		width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	    padding-left: .3rem;
	}
	.count{
		float: right;
   		margin-right: .2rem;
    	font-size: .24rem;
    	color: #9e9e9e;
	}
	.checked{
		background: #f1f1f1;
	}
/*左侧二级导航*/
	#order-wrapper{
		width: 100%;
		height: 2.38rem;
		background: #fff;
		overflow: hidden;
	}
	#order-scroller{
		height: 2.4rem;
	}
	.order{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.order-checked{
		background: #f1f1f1;
	}

</style>
