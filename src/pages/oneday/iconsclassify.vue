<template>

		    	<div class="icons-classify">
		    		<div class="icon-wrapper" v-for="(item, index) in classify.classifyInfo" :key="'index'+ '_iconsclassify'" v-if="classify.city == $store.state.city">
		    			<router-link :to="{path:item.link,query:{title:item.title, id:item.id}}">
			    			<img class="icon-img" :src="item.imgUrl">
			    			<p class="icon-title">{{item.title}}</p>
		    			</router-link>
		    		</div>
		    	</div>

</template>

<script>

export default {
  data () {
    return {
    	swiperOption: {
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
        }
    }
  },
  props: ['classify']
}
</script>

<style scoped>
    .icons-classify{
    	background: white;
        height:2.36rem;

    }
	.icon-wrapper{
		padding-top: .4rem;
		overflow:hidden;
		width:20%;
		float:left;
	}
	.icon-img{
		width: 1.1rem;
		display: block;
		margin: 0 auto;
	}
	.icon-title{
		margin-top: .15rem;
		text-align: center;
		color:#212121;
		font-size: .28rem;
	}

</style>
