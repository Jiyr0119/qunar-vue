<template>
	<ul class="letter" id="letter" >
		<li class="letter-list" @click="cityInitialHandleClick(item)" @touchmove.prevent="cityInitialHandleMousedown($event)" v-for="(item, index) in cityInitialSortMethod">{{item.initialSort}}</li>	
	</ul>
</template>

<script>
	export default {
		props:["cityInfo", "windowScrollTop"],
		
		data(){
			return{
				cityInitialSort: [],
				cityInitialArray: []
			}
		},
		methods:{
			cityInitialHandleMousedown: function(e) {
				var cityInitialTotality = document.getElementById("letter");
				var cityInitialGather = cityInitialTotality.children;	
				var cityInitialHeight = parseInt(window.getComputedStyle(cityInitialGather[0], false)["height"], 10)/2;	
				var fristInitialTop = cityInitialTotality.offsetTop + cityInitialHeight;
				var lastInitialTop = parseInt(window.getComputedStyle(cityInitialTotality, false)["height"], 10) + fristInitialTop;
				var index=0;

				if(e.touches[0].clientY <= fristInitialTop) {
					this.$emit("scrollTop",0);	
					return;
				}
				if(e.currentTarget.tagName == "LI" && e.touches[0].clientY >= fristInitialTop && e.touches[0].clientY <= lastInitialTop) {
									
					for(var i = 0; i < cityInitialGather.length; i++) {
						this.cityInitialArray.push(cityInitialGather[i].offsetTop);
					}
					for(var i = 0; i < this.cityInitialArray.length; i++) {
						if(e.touches[0].clientY - (fristInitialTop + cityInitialHeight) <= this.cityInitialArray[i]) {
							index = i;
							break;
						}
						if(e.touches[0].clientY >= lastInitialTop - cityInitialHeight) {
							index = this.cityInitialSort.length - 1;
							break;
						}
						if(parseInt(window.getComputedStyle(document.body,false)["height"])-this.cityInitialSort[i].cityDistrictHeight<=window.innerHeight/2){
							return;
						}
					}
					this.$emit("scrollTop", this.cityInitialSort[index].cityDistrictHeight);	
				}
			},

			cityInitialHandleClick: function(value) {
				this.$emit("scrollTop", value.cityDistrictHeight);				
			}

		},

		computed: {
		    cityInitialSortMethod: function() {
		    	this.cityInitialSort=[];
		    	var cityInitialSort = [],
		    		cityDdistrictHeightArray = [],
		    		count = 1,
		    		initialHeightCount = 0;
		    	for (var i = 0; i < this.cityInfo.length; i++) {
		    		cityInitialSort.push(this.cityInfo[i].pinyin[0]);
		    		cityInitialSort = cityInitialSort.sort();
		    	}
		    	for (var i = cityInitialSort.length; i >= 0; i--) {
		    		if (cityInitialSort[i] == cityInitialSort[i - 1]) {
		    			cityInitialSort.splice(i, 1);
		    			count++;
		    		}else {
		    			cityDdistrictHeightArray.unshift(count * 38 + 27);
		    			count = 1;
		    		}
		    	}
		    	for (var i = 0; i < cityDdistrictHeightArray.length; i++) {		
		    		initialHeightCount += cityDdistrictHeightArray[i];		    				   	
		    		cityDdistrictHeightArray[i] = initialHeightCount + 400;		    		
		    	}
		    	cityDdistrictHeightArray.unshift(400);
		    	for(var i = 0; i < cityInitialSort.length; i++) {
					this.cityInitialSort[i] = {};
					this.cityInitialSort[i].initialSort = cityInitialSort[i];
					this.cityInitialSort[i].cityDistrictHeight = cityDdistrictHeightArray[i];
				}
		    	return this.cityInitialSort;
			}
		}
	}
</script>

<style scoped>
	.letter{
		position:fixed;
		top:3rem;
		right:0;
		z-index: 9999;
	}
	.letter-list{
		font-size: 0.24rem;
		width: .32rem;
		line-height: .32rem;
		color:#00afc7;
		text-align: center;
	}
</style>