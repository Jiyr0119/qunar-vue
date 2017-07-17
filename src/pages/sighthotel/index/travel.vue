<template>
	<div class="travel border-topbottom">
		<div class="travel-item border-right" v-for="(item, index) in travelInfo" :key="index + '_travel_item'">
			<div class="travel-where">
				<img class="travel-img" :src="item.iconUrl">
				<p class="travel-descr">{{item.whereTravel}}</p>
			</div>
			<div class="travel-city">
				<p class="city-left">{{item.city1}}</p>
				<p class="city-right">{{item.city2}}</p>
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
	props:["travelInfo"]
}
</script>


<style scoped>
	.travel {
		width: 100%;
		display: flex;
		background: #fff;
		margin-top: .2rem;
	}
	.travel-item {
		flex: 1;
		overflow: hidden;
		padding-bottom: 5%;
	}
	.travel-where{
		display: flex;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		margin-top:5%;
	}
	.travel-img {
		width: .48rem;
		height: .42rem;
		margin-left: 28%;
		margin-top: .06rem;
	}
	.travel-descr{
        margin-left: .1rem;
	}
	.travel-city{
		overflow: hidden;
		text-align: center;
		margin-top: .2rem;
	}
	.city-left{
		float: left;
		margin-left: .2rem;
		width: 40%;
		background: #f5f5f5;
		height: .5rem;
		line-height: .5rem;
		border-radius: .2rem;
	}
	.city-right{
		float: right;
		margin-right: .2rem;
		width: 40%;
		background: #f5f5f5;
		height: .5rem;
		line-height: .5rem;
		border-radius: .2rem;
	}
</style>
