<template>
	<ul class="content-products-tab border-topbottom">
		<li class="tab-item tab-item-moods"  v-for="(item, index) in tabItems" v-model="url" v-on:click="handleTabClick(index)" :class="{'tab-item-active': selected === index} ">{{item.title}}</li>
	</ul>
</template>

<script>
	export default {

		data() {
			return {
				url: "",
				selected: 0,
				tabItems: [
					{"title": "人气专区"},
					{"title": "夺宝新货"},
					{"title": "即将开奖"},
				]
			}
		},

		methods: {
			handleTabClick: function(index) {
				this.selected = index;
				switch(index) {
					case 0: 
						this.url = '/static/campaign/listOrderByHot.json';
						break;
					case 1: 
						this.url = '/static/campaign/listOrderByDate.json';
						break;
					case 2: 
						this.url = '/static/campaign/listOrderByProcess.json';
						break;
					default: 
						console.log("get data error");
				}
				this.$emit("reqUrl", this.url);
			}
		}

	}
</script>

<style scoped>

	.content-products-tab {
		display: flex;
		height: .8rem;		
	}

	.content-products-tab::before,
	.content-products-tab::after {
		border-color: #c9cccd;
	}
	
	.tab-item {
		position: relative;		
		flex: 1;
		text-align: center;
		line-height: .8rem;
	}

	.tab-item-active::after {
		content: "\0020";
		position: absolute;
		left: 50%;
		bottom: 0;
		margin-left: -.65rem;
		width: 1.3rem;
		height: .04rem;
		background: #21a0af;
	}

</style>
