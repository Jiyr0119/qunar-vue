<template>
	<div class="cityhot">
	
		<div class="cityarea-group">
			<div class="cityarea-title">您的位置</div>
			<div class="cityarea-content city-now border-topbottom">
				<div class="cityitem-light">
					<span @click="handleHotCityClick" class="cityitem-name cityitem-current">{{currentPosition}}</span>
				</div>
			</div>
		</div>

		<div>
			<div class="cityarea-title">热门城市</div>
			<div class="cityarea-content city-now border-topbottom">
				<div @click="handleHotCityClick" class="cityitem-light" v-for="(item,index) in cityHot" v-show="item.name.length<=5" v-if="index<18" :key="index+'_hotcity'">
					<span class="cityitem-name">{{item.name}}</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ["cityHot"],
		data() {
			return {
				currentPosition: "北京"
			}
		},
		methods: {
			handleHotCityClick: function(e) {
				var city = e.target.innerText;
				try {
					window.localStorage.city = city;
				}catch(e){}
				this.$store.commit("changeCity", city);
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.cityhot {
        width: 100%;
        background: #f5f5f5;
	}
	.cityarea-title {
	    line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	}
	.city-now {
	    padding-top: .04rem;
	    padding-bottom: .26rem;
	}
	.cityarea-content {
	    overflow: hidden;
	    padding-right: .5rem;
	    padding-left: .2rem;
	    background: #fff;
	}
	.cityarea-content::before, .cityarea-content::after {
		border-color: #c9cccd;
	}
	.cityitem-light {    
	    box-sizing: border-box;
	    float: left;
	    width: 33.33%;
	    padding: .2rem .14rem 0 .1rem;
	}
	.cityitem-name {
	    display: block;
	    line-height: 28px;
	    text-align: center;
	    color: #212121;
	    border: .02rem solid #c9cccd;
	    border-radius: .06rem;
	}
	.cityitem-current {
		border-color: #00afc7;
	}
</style>