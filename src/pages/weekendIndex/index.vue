<template>
	<div class="weekend-main js-weekend-main" v-on:touchstart="touchStart" v-on:touchmove="loadMore">
		<weekend-header></weekend-header>
		<weekend-classify :classifyInfo="classifyInfo" :nearScapeInfo="nearScapeInfo" :weekendChosenInfo="weekendChosenInfo"></weekend-classify>
		<weekend-pinterest :list="Pinterest" :isloading="isloading"></weekend-pinterest>
	</div>
</template>

<script>
	import header from "./header"
	import classify from "./classify"
	import pinterest from './pinterest'
	export default {
		created: function() {
			this.getWeekendData()
		},
		data() {
		    return {
		    	"currentCity": "",
		      	"classifyInfo": [],
		       	"nearScapeInfo": [],
		       	"weekendChosenInfo": [],
		       	"Pinterest": [],
		       	"preventMisuse": true,
		       	"isloading": false
		    }
		},
	  	components: {
	  		"weekend-header": header,
	  		"weekend-classify": classify,
	  		"weekend-pinterest": pinterest
	  	},
	  	methods:{
	  		getWeekendData: function() {
	  			this.$http.get('/static/weekenddata.json').then(response => {
	  				this.getWeekendDataSucc(response)
			  	},response => {
			  		console.log("get data Error")
			  	})
	  		},
	  		getWeekendDataSucc: function(response) {
				this.currentCity = this.$store.state.city;
				this.classifyInfo = response.body.data[this.currentCity].classifyInfo;
				this.nearScapeInfo = response.body.data[this.currentCity].nearScapeInfo;
				this.weekendChosenInfo = response.body.data.weekendChosenInfo;
				this.currentCity = response.body.data[this.currentCity].city;
				for(var i=0, length=response.body.data[this.currentCity].pinterest.length; i<length; i++){
					this.Pinterest.push(response.body.data[this.currentCity].pinterest[i])
				}
				this.preventMisuse = true;
				this.isloading = false;
	  		},
	  		touchStart: function(e) {
	  			this.startY=e.changedTouches[0].clientY
	  		},
	  		loadMore: function(e) {
	  			var weekendMain=document.getElementsByClassName("js-weekend-main")[0]
	  			var pageHeight = weekendMain.scrollHeight; //clientHeight
	  			var screenHeight = document.documentElement.offsetHeight;
	  			var scrollTop = document.body.scrollTop
				this.currentTouchY = e.changedTouches[0].clientY
				this.dragDistance = this.currentTouchY - this.startY //拖动距离
	  			if(pageHeight-screenHeight-scrollTop <= 200&&this.preventMisuse&&(this.dragDistance<-100)){
	  				this.getWeekendData();
	  				this.preventMisuse = false;
	  				this.isloading = true;
	  			}
	  		}
	  	}
	}
</script>

<style scoped>
	.weekend-main{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f1f5f6;
	}
</style>
