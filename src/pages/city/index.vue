<template>
	<div>
		<city-header :cityInfo="cityInfo" @isSarching="isSarching" @isAbroad="isAbroad"></city-header>
		<div v-show="isShow">
				<city-hot :cityHot="cityHot"></city-hot>
				<city-list :cityInfo="cityInfo"></city-list>
				<city-aside :cityInfo="cityInfo" @scrollTop="cityScrollTop" :windowScrollTop="windowScrollTop"></city-aside>
		</div>
	</div>
</template>

<script>
	import cityheader from "./cityheader" 
	import cityhot from "./cityhot" 
	import citylist from "./citylist" 
	import cityaside from "./cityaside" 


	export default {
		created: function() {
			this.$http.get("/static/city.json").then(response => {
				if(response.body.ret) {
					this.cityInfo = response.body.data.domestic;
					this.domesticCity = response.body.data.domestic;
					this.overseasCity = response.body.data.overseas;
					for (var i=0;i<17;i++) {
						this.cityHot.push(this.cityInfo[i])
					}
				}else {
					console.log("Invalid data!");
				}
			}, response => {
				console.log("get city data err!");
			}); 
		},

		data() {
			return {	
				domesticCity: [],
				overseasCity: [],
				cityInfo:[],
				windowScrollTop:"",
				isShow:true,
				cityHot:[] 
			}
		},
		components: {
			"city-header": cityheader,
			"city-hot": cityhot,
			"city-list": citylist,
			"city-aside": cityaside
		},
		methods: {
			isAbroad: function(value) {
				if (value) {
					this.cityInfo = this.domesticCity;
					this.cityHot=[];
					for (var i=0;i<17;i++) {
						this.cityHot.push(this.cityInfo[i])
					}
				}else{
					this.cityInfo = this.overseasCity;
					this.cityHot=[];
					for (var i=0;i<17;i++) {
						this.cityHot.push(this.cityInfo[i])
					}
				}
				
			},
			cityScrollTop: function(value) {
				document.body.scrollTop=value;
			},
			isSarching: function(isShow) {
				if (isShow) {
					this.isShow=true;
				}else {
					this.isShow=false;
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', function() {//想提高性能，可以加一个定时器
				setTimeout(function(){
					 this.windowScrollTop = document.body.scrollTop;
				},1)
            }.bind(this), false)
		}
	}
	
</script>

<style scoped>
	
</style>