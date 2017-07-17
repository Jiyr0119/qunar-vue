<template>
	<div>
		<div class="classify">
	  		<div class="classify-item" v-for="(item, index) in classifyInfo" :key="index+'classifyItem'">
		  		<router-link :to="{path:'/onedaytour',query:{region:city, title:encodeURI(item.title), id:item.id}}">
		  		<!-- 路径中传参数，转换了中文字符，解析方法{{decodeURI($route.query.title)}} -->
			  		<div>
				  		<img class="classify-icon" :src="item.imgUrl">
			  		</div>
			  		<p class="classify-title">{{item.title}}</p>
			  	</router-link>
	  		</div>
	  	</div>
	  	<div class="near-scape border-top" v-if="nearScapeInfo.length">
	  	<!-- 以nearScapeInfo的长度是否为零判断要不要显示这块内容 -->
	  		<div class="near-scape-items border-rightbottom" v-for="(item, index) in nearScapeInfo" :key="index+'nearScapeInfo'">
	  			<router-link :to="{path:'/onedaytour',query:{id:item.id}}">
	  				<span class="near-scape-item">
	  					{{item.title}}
	  				</span>
	  			</router-link>
	  		</div>
	  	</div>
	  	<div class="weekend-chosen border-topbottom">
	  		<p class="weekend-chosen-title"><span class="weekend-chosen-titleicon"></span>{{weekendChosenInfo.title}}</p>
	  		<div class="weekend-chosen-items" v-for="(item, index) in weekendChosenInfo.weekendChosenItems" :key="item+'weekendChosen'">
	  			<router-link :to="{path:'/'+item.link}">
	  				<img class="weekend-chosen-toppic" :src="item.imgUrl"/>
	  			</router-link>
	  		</div>
	  	</div>
  	</div>
</template>

<script>
	export default {
	  props: ["classifyInfo", "nearScapeInfo", "weekendChosenInfo", "city"]
	}
</script>

<style scoped>
	.classify{
		display: flex;
		background: #fff;
	}
	.classify-item{
		display: block;
		width: 25%;
		padding-top: .4rem;
		padding-bottom: .5rem;
		text-align: center;
	}
	.classify-icon{
		width: 56.25%;
		min-width: .9rem;
	}
	.classify-title{
		margin-top: .16rem;
		color: #212121;
		font-size: .26rem;
	}
	.near-scape{
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		color: #616161;
		background: #fff;
	}
	.near-scape::before{
		border-color: #bbbbbb;
	}
	.near-scape-items{
		display: inline-block;
		box-sizing: border-box;
		width: 33.333%;
		height: .82rem;
		line-height: .82rem;
		text-align: center;
	}
	.near-scape-items::before,.near-scape-items::after{
		border-color: #bbbbbb;
	}
	.near-scape-items:nth-child(3n)::before{
		border:0;
	}
	.near-scape-item{
		font-size: .28rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		width: 100%;
		height: 100%;
		color: #616161;
	}
	.near-scape-item::before,.near-scape-item::after{
		border-color: #bbbbbb;
	}
	.weekend-chosen{
		width: 100%;
		margin-top: .2rem;
		background: #ccc;
		padding: 0 .2rem .12rem;
		box-sizing: border-box;
		background: #fff;
	}
	.weekend-chosen::before,.weekend-chosen::after{
		border-color: #bbbbbb;
	}
	.weekend-chosen-title{
		width: 100%;
		height: .88rem;
		line-height: .88rem;
	}
	.weekend-chosen-toppic{
		width: 100%;
		min-height: 2rem;
		margin-bottom: .2rem;
		background: #f0f0f0 url(data:image/gif;base64,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) center no-repeat;
	}
	.weekend-chosen-titleicon{
		display: inline-block;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		margin-right: .1rem;
	}
</style>
