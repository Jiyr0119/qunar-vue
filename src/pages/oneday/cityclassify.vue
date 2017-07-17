<template>

	<div class="city-classify">
		<div class="city-top">
			<p class="city-popular"><span class="iconfont city-icon">&#xe6a4;</span>热门城市</p>
			<router-link :to= "{path:'/city'}">
				<p class="city-total">
					<span class="city-all">全部城市 </span>
					<span class="city-right-arrow"></span>
				</p>
			</router-link>
		</div>
		<div class="city-wrapper" v-for="(item, index) in cityclassify" :key="'index'+ '_cityclassify'">
			<router-link :to="{path:item.link,query:{title:item.title, id:item.id}}">
				<p class="city-title">{{item.title}}</p>
			</router-link>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['cityclassify']
	}
</script>

<style scoped>
	.city-classify {
		margin-top: .2rem;
		height: 2.56rem;
		background: white;
	}

	.city-wrapper {
		padding-top: .1rem;
		overflow: hidden;
		width: 25%;
		float: left;
	}

	.city-title {
		display: block;
		margin: .06rem;
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		color: #212121;
		background: #f0fbfd;
		border-radius: 2px;
		text-align: center;
	}

	.city-right-arrow {
		float: left;
		margin-top: .28rem;
		margin-left: .1rem;
		transform: rotateZ(-135deg);
		width: .15rem;
		height: .15rem;
		border-left: .04rem solid #616161;
		border-bottom: .04rem solid #616161;
		display: inline-block;
		position: absolute;
		right: .3rem;
		top: .05rem;
	}

	.city-icon {
		width: .40rem;
		height: .40rem;
		color: #08bed5;
		margin-right: .08rem;
	}

	.city-top {
		height: .84rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.city-popular {
		margin-left: .2rem;
	}

	.city-total {
		margin-right: .36rem;
	}

	.city-all {
		height: .84rem;
		width: 1.4rem;
		color: #616161;
		display: inline-block;
		line-height: .84rem;
		text-align: center;
	}
</style>
