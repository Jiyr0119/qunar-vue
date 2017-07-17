<template>
<div>
	<div class="lazy-load" id="weekendtrip">
		<h2 class="weekendtrip-title">周末去哪儿</h2>
		<div>
			<div class="weekendtrip-item" v-for="(recommendItem, index) in weekendtripInfo" :key="index+'recommendItem'">
				<router-link :to="'/weekend/'+index+'/'+recommendItem.title">
					<div class="weekendtrip-item-imgcontainer">
						<img class="weekendtrip-item-img" :src="recommendItem.imgurl"/>
					</div>
					<div class="weekendtrip-descriptioncontainer">
						<p class="weekendtrip-description-title">{{recommendItem.title}}</p>
						<p class="weekendtrip-description-text">{{recommendItem.description}}</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
	<div class="weekendtrip-prompt">
		<span class="weekendtrip-prompt-iconfont iconfont">&#xe666;</span>
		<span class="weekendtrip-price-desc">
			票面价是指通过景区指定窗口售卖的纸质门票上标注的价格
		</span>
	</div>
	<div class="weekendtrip-footer">
		<div class="weekendtrip-footer-navcontainer">
			<ul class="weekendtrip-footer-ul">
				<li class="weekendtrip-footerul-li" v-for="iconitem in navIcon">
					<a href="#" class="weekendtrip-footerul-link">
						<div class="weekendtrip-footerul-icon iconfont" v-html="iconitem.icon"></div>
						<span class="weekendtrip-footerul-title">{{iconitem.iconText}}</span>
					</a>
				</li>
				<span class="weekendtrip-footer-hide" @click="handlehideclick">
					|
					<span class="footer-iconfont-down iconfont">&#xe671;</span>
					收起
				</span>
			</ul>
			<span class="weekendtrip-footer-more" @click="handlemoreclick">
			 |
				<span class="footer-iconfont-down iconfont">&#xe628;</span>
				 更多
			</span>

			<ol class="weekendtrip-footer-ol" >
				<li class="weekendtrip-footerol-li"v-for="(navItem, index) in footernavInfo":key="index+'footeritem'"><a href="#">{{navItem.title}}</a></li>
			</ol>
			<div class="weekendtrip-equipmenttype" >
				<a href="#" v-for="(typeItem, index) in equipmenttype" class="equipmenttype-click" :class="{'weekendtrip-equipmenttype-fontcolor': index==0}">{{typeItem.title}}</a>
			</div>
			<div class="weekendtrip-footer-last">
			Qunar 京ICP备123061意见反馈
		</div>
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
	props:["weekendtripInfo", "footernavInfo", "equipmenttype", "navIcon"],
	methods: {	
	  	handlemoreclick: function() {
	  		var footerul = document.querySelector(".weekendtrip-footer-ul");
	  		var footermore = document.querySelector(".weekendtrip-footer-more");
	  		var footerhide = document.querySelector(".weekendtrip-footer-hide");
	  		footerul.style.height = "2.2rem";
	  		footerul.style.width = "7rem";
	  		footermore.style.display = "none";
	  		footerhide.style.display = "block"; 
	  	},
	  	handlehideclick: function() {
	  		var footerul = document.querySelector(".weekendtrip-footer-ul");
	  		var footermore = document.querySelector(".weekendtrip-footer-more");
	  		var footerhide = document.querySelector(".weekendtrip-footer-hide");
	  		footerul.style.height = ".5rem";
	  		footerul.style.width = "6rem";
	  		footermore.style.display = "block";
	  		footerhide.style.display = "none"; 
	  	}
	}
}
</script>

<style scoped>
	#weekendtrip{
		font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
		color: #212121;
		font-size: .28rem;
		line-height: 1;
	}	
	.weekendtrip-title{
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		font-weight: normal;
		font-family: tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif;
	}
	.weekendtrip-item{
		position: relative;
		margin-bottom: .1rem;
		background: #fff;
	}
	.weekendtrip-item-imgcontainer{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 37.4375%;
	}
	.weekendtrip-item-img{
		width: 100%;
	}
	.weekendtrip-descriptioncontainer{
		position: relative;
		padding: .14rem .2rem .2rem .2rem;
	}
	.weekendtrip-description-title{
		overflow: hidden;
		padding-right: 1.4rem;
		font-size: .28rem;
		line-height: .48rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #333;
	}
	.weekendtrip-description-text{
		overflow: hidden;
		padding-right: 1.4rem;
		color: #616161;
		font-size: .24rem;
		line-height: .42rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.weekendtrip-linkarea{
		width: 100%;
		height: 100%;
		display: block;
		color: #212121;
	}
	.weekendtrip-prompt{
		width: 100%;
		margin-top: .1rem;
		padding: .14rem .1rem;
		font-size: .24rem;
		line-height: .32rem;
		background: #fff;
		color: #616161;
	}
	.weekendtrip-prompt-iconfont{
		width: .24rem;
		display: block;
		float: left;
		line-height: .32rem;
		font-size: .2rem;
	}
	.weekendtrip-price-desc{
		font-size: .24rem;
		line-height: .32rem;
		color: #616161;
	}
	.weekendtrip-footer-ul{
		position: relative;
		width: 6rem;
		height: .5rem;
		margin-left: .4rem;
		padding: .2rem .2rem 0 .2rem;
		overflow: hidden;
		list-style: none;
	}
	.weekendtrip-footerul-li{
		padding-left: .2rem;
		height: .62rem;
		width: 1.4rem;
		float: left;
	}
	.weekendtrip-footer-more{
		font-size: .05rem;
		color: #9e9e9e;
		position: absolute;
		right: 1rem;
		margin-top: -.6rem;
	}
	.weekendtrip-footer-hide{
		font-size: .05rem;
		display: none;
		position: absolute;
		bottom: 0;
		right: 1.3rem;
		color: #9e9e9e;
	}
	.footer-iconfont-down{
		font-size: .5rem;
		position: relative;
		top:.1rem;
	}
	.weekendtrip-footerul-icon{
		float: left;
		font-size: .5rem;
		color: #9e9e9e;
	}
	.weekendtrip-footerul-title{
		float: left;
		display: inline-block;
		color: #9e9e9e;
		margin: .1rem 0 0 .1rem;
		border-bottom: .02rem solid #acacac;
		font-size: .24rem;
	}
	.weekendtrip-footerul-link{
		display: block;
		height: .44rem;
		width: 100%;
	}
	.more{
		border: 0;
	}
	.footerul-link-last{
		display: inline-block;
		border-left: 1px solid #acacac;
		padding-left: .2rem;
		height: .34rem;
	}
	.weekendtrip-footer-ol{
		height: .8rem;
		border-bottom: .02rem solid #cacaca;
	}
	.weekendtrip-footerol-li{
		float: left;
		padding-left: .4rem;
		margin-top: .25rem;
	}
	.weekendtrip-equipmenttype{
		padding-top: .2rem;
		text-align: center;
	}
	.equipmenttype-click{
		margin:0 .3rem;
	}
	.weekendtrip-footer-last{
		color: #9e9e9e;
		text-align: center;
		font-size: .28rem;
		padding: .2rem;
	}
	.weekendtrip-equipmenttype-fontcolor{
		color: black;
	}
</style>