<template>
	<ul class="city-menu border-leftright">
		<li class="city-list" v-for="(item,index) in cityInitialSort" :key="index+'_head'">
			<dl>
				<dt class="city-index border-bottom">{{item}}</dt>
				<dd class="city-item border-bottom" @click="handleClickCityList" v-for="value in cityDatas(item)" :key="'_list'+index">{{value.name}}</dd>
			</dl>
		</li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				cityWords: []
			}
		},
		props: ["cityInfo"],
		methods: {
			//函数实现功能：输入json数据、字母字符串，返回城市名称数组
			cityDatas: function(words) {
				var msg = this.cityInfo;
				words = words.toString().toLowerCase();
				words.toString().split("").map((word, num) => {
					msg = msg.filter((value, index) => {
						var str = value.pinyin.charAt(num).toLowerCase();
						return word == str;
					})
				})
				return msg;
			},
			handleClickCityList: function(e) {
				var city = e.target.innerText;
				try{
					window.localStorage.city = city;
				}catch(e) {}
				this.$store.commit("changeCity", city);
				this.$router.go(-1);	
			}
		},
		computed:{
		    cityInitialSort: function() {
		    	this.cityWords = [];
				for(var i = 0; i < this.cityInfo.length; i++) {
					var str = this.cityInfo[i].pinyin;	
					if (this.cityWords.indexOf(str[0]) == -1) {
						this.cityWords.push(str[0]);
						this.cityWords = this.cityWords.sort();
					}
				}
				return this.cityWords;
			}
		}
	}

</script>

<style scoped>
	.city-menu {
		background: #f5f5f5;
	}
	.city-index {
		line-height: .54rem;
		padding-left: .3rem;
		color: #616161;
		font-size: .26rem;
	}
	.city-item {
		line-height: .76rem;
		padding-left: .2rem;
		font-size: .28rem;
		color: #212121;
		background: #fff;
	}
</style>