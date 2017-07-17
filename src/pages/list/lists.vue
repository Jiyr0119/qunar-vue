<template>
    <div class="listCon">
		<paginate class="view-list page" ref="paginator" name="languages" :list="listCon" :per="pre">
	    	<li class="sight-group border-topbottom" v-for="(item, index) in paginated('languages')" :key="'li_item_' + index">
		    	<div class="item-content">
			    	<div class="sight-info">
				    	<a :href="item.url">
					    	<div class="sight-imgcon">
					    		<img class="sight-img" v-lazy="item.img">
					    		<span class="list-bookingflag-today" v-show="item.today">
					    			<span class="list-bookingtext">可订今日</span>
					    		</span>
					    	</div>
					    	<div class="sight-detail">
						    	<h3 class="sight-name">{{item.name}}</h3>
						    	<span class="tag-word" v-show="item.hot">热</span>
						    	<div class="sight-comments">
						    		<span class="mpf-starlevel">
						    			<span class="mpg-iconfont mpf-starlevel-gain" :style="item.star">★★★★★</span>
						    			<span class="mpg-iconfont mpf-starlevel-total">★★★★★</span>
						    		</span>
						    		<span class="comments-totalnum">{{item.comment}}评论</span>
						    	</div>
						    	<div class="sight-location">
						    		<span class="sight-address">{{item.address}}</span>
						    	</div>
					    	</div>
				    	</a>
			    	</div>
		    	</div>
	    	</li>
		</paginate>
	    <div class="moreinfo">
	    	<div class="pagination">
				<a @click="prevPage" class="linkPage">上一页</a>
				<span v-if="$refs.paginator" ref="pageNumber" class="page-num" :val="pageNum">
					{{pageNum}}
				</span>
				<a @click="textPage" class="linkPage">下一页</a>
	    	</div>
	    	<div class="page-text">来这儿景点</div>
	    </div>
    </div>
</template>

<script>

	import lists from './lists.vue'
	import {Paginate, PaginateLinks} from 'vue-paginate'

	export default {
		methods: {
			prevPage () {
				if (this.$refs.paginator) {
					var current = this.pageNum;
					if(current > 1) {
						this.$refs.paginator.goToPage(this.pageNum-1);
					}
				}
			},
			textPage () {
				if (this.$refs.paginator) {
					var num = parseInt(this.listCon.length/this.pre)+1;
					var current = this.pageNum;
					if(current < num) {
						this.$refs.paginator.goToPage(this.pageNum+1);
					}
				}
			},
			cityPageList(value,index) {
				this.$emit("cityPageList");
			},
			sortList(str) {
				switch(str) {
					case "人气最高": this.listCon.sort(function(x,y) {
						return x.comment < y.comment ? 1 : -1
					});break;
					case "离我最近": this.listCon.sort(function(x,y) {
						return x.address < y.address ? 1 : -1
					});
					case "推荐排序": this.listCon.sort(function(x,y) {
						return x.hot < y.hot ? 1 : -1
					});
				}
			}
		},
		watch: {
			listClassigy() {
				var this_ = this;
				this.listCon = this.newCon.filter(function(item){ 
				    return item.address.split('·')[0]==this_.listClassigy && this_.cityPageList(item.scenicSpotClassification)
				});
			}
		},
		computed: {
			pageNum: function() {
				return parseInt(parseInt(this.$refs.paginator.pageItemsCount)/this.pre)+1
			}
		},
		props:["newCon","listCon","listClassigy"],
		data () {
			return {
				isAction: this.pre,
				pre: 8,
    			paginate: ['languages']
			}
		}

	}
</script>

<style scoped>
	.listCon {
	    position: relative;
	    top: .78rem;
	    z-index: 1;
	}
	.page {
		background-color: #f5f5f5;
		height: 100%;
	}
	.sight-group::after {
		border-color: #c9cccd;
	}
	.sight-group::before {
		border-color: #c9cccd;
	}
	.sight-group {
		margin-bottom: .2rem;
    	background: #fff;
    	position: relative;
	}
	.sight-info {
		padding: .2rem;
	}
	.sight-imgcon {
		float: left;
		position: relative;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.sight-img {
		opacity: 1;
		transition: opacity 400ms;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.list-bookingflag-today {
		background: #fa8514;
		position: absolute;
	    left: -.04rem;
	    top: -.04rem;
	    height: .24rem;
	    padding: .02rem;
	    color: #fff;
	    line-height: .24rem;
	}
	.list-bookingflag-today::after {
		content: "";
	    position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
		border-top: .14rem solid #fa8514;
    	border-bottom: .14rem solid #fa8514;
    	border-right: .1rem solid transparent;
	}
	.list-bookingtext {
		display: block;
    	font-size: .24rem;
    	transform: scale(.83);
	}
	.sight-detail {
		position: relative;
	    overflow: hidden;
	    padding-left: .2rem;
	    height: 1.6rem;
	}
	.sight-name {
		float: left;
		overflow: hidden;
	    max-width: 60%;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .36rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.tag-word {
	    margin-left: .06rem;
	    float: left;
	    margin-top: 2px;
	    width: .3rem;
	    height: .3rem;
	    background: #ff1200;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .3rem;
	    text-align: center;
	}
	.sight-comments {
		margin-top: .38rem;
	    height: .64rem;
	    line-height: .64rem;
	}
	.mpf-starlevel {
		width: 1.2rem;
	    height: .24rem;
	    font-size: .24rem;
        display: inline-block;
    	position: relative;
	}
	.mpf-starlevel-gain, .mpf-starlevel-total {
		overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.mpf-starlevel-gain {
		z-index: 2;
    	color: #00bcd4;
	}
	.mpg-iconfont {
		font-family: monospace;
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
	.mpf-starlevel-total {
		color: #ddd;
		z-index: 1;
	}
	.comments-totalnum {
		position: relative;
	    top: -.04rem;
	    margin-left: .06rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.sight-location {
		position: absolute;
	    bottom: 0;
	    color: #9e9e9e;
	    font-size: 0;
	    white-space: nowrap;
	}
	.sight-address {
		font-size: .24rem;
	}
	.moreinfo {
		padding-bottom: .2rem;
	    color: #00afc7;
	    text-align: center;
	    line-height: .7rem;
	    background: #f5f5f5;
	}
	.linkPage {
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.disablePage {
		background: #bdbdbd;
	    color: #fff;
	    border: 0;
	}
	.page-num {
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.page-text {
		padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}

</style>