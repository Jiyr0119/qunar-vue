<template>
<div>
	<div class="main-list">
		<list-header @headerClick="headerClick" @searchClick="searchClick"></list-header>
		<navigator :subnavInfo = "subnavInfo" :show="showNav" :showMask="maskShow" :orderShow="showOrder" @ClassClick="ClassClick" @orderClick="indexOrderClick"
		 @subThreenav="subThreenav" @orderItemClick="orderClickEvent" @orderAClick="orderAClick" @orderBClick="orderBClick" @orderCClick="orderCClick"></navigator>
		<list-lists :newCon="newCon" :listCon="listCon" :listClassigy="listClassigy" @cityPageList="cityPageList"></list-lists>
		
	</div>
	<div class="mask" @touchstart="handleMaskClick"  v-show="maskShow">
	</div>
</div>
</template>

<script>
	import header from "./header";
	import navigator from "./navigator";
	import lists from './lists.vue';

	export default {
		created() {
	        this.$http.get('/static/list.json').then(response => {
	        	this.subnavInfo = response.body.data.subnavinfo
	        }, response => {
	             console.log("get index data error")
	        });	
	        
	        this.$http.get('/static/scenicSpotList.json').then(response => {
	            var this_ = this;
	            if(response.body.ret) {
	            	this.newCon = response.body.data.listCon;
	            	this.listCon = response.body.data.listCon.filter(function(item){ 
					    return item.address.split('·')[0]=='北京' && this_.cityPageList(item.scenicSpotClassification)
					});
	            }
	        }, response => {
	             console.log("get index data error")
	        });	
	    },
		data () {
			return {
				showNav: false,
				subnavInfo: [],
				showOrder: false,
				maskShow: false,
    			newCon: [],
				listCon: [],
				listClassigy: this.$store.state.playItem.replace(/(^\s*)|(\s*$)/g,"")
			}
		},

		components: {
			"list-header": header,
    		"navigator" : navigator,
			"list-lists": lists
		},

		methods:{
			handleGetIndex(index) {
				this.i=index;
			},
			ClassClick() {
				return (this.showNav = ! this.showNav, this.showOrder=false, this.maskShow=this.showNav)
			},
			handleMaskClick() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			indexOrderClick() {
				return (this.showOrder = ! this.showOrder, this.showNav=false, this.maskShow=this.showOrder)
			},
			maskClick() {
				return  this.showNav =this.showOrder= this.maskShow= false
			},
			headerClick() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			subThreenav() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			orderClickEvent() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			searchClick(value) {
				this.searchItem=value
			},
			orderAClick(orderA) {
				this.orderA = orderA
				alert(orderA)
			},
			orderBClick(orderB) {
				this.orderB = orderB
				alert(orderB)
			},
			orderCClick(orderC) {
				this.orderC = orderC
				alert(orderC)
			},
			cityPageList(value,index) {
				var classify=false;
				for(var i=0;i<value.length;i++) {
					if(value[i]==this.listClassigy) {
						classify=true;
					}
				}
				return classify
			},
		} 
	}
</script>
	
<style scoped>
	.main-list{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		background: #f5f5f5;
	}
	.mask{
		position: fixed;
		top:0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0, .35);
		z-index: 3;
	}
</style>
