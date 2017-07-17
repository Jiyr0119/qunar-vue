<template>
	<div>
		<div class="model" v-if="showInfo">
				<div class="model_con">
					<div class="model_hidden" v-on:click="showStatus">X</div>
					<div class="model_img_wrap border-bottom"><img :src="models.s_imgUrl" class="model_img"></div>
					<div class="model_detail_wrap"><p class="model_detail">{{models.detail}}</p></div>
				</div>
		</div>
	</div>
		
</template>

	<script>
		export default {
			  data () {
		    	 return {
			    	show: false,
			     }						
			  },
			  props:["showInfo", "models"],
			  methods:{
			  	showStatus () {
			  		this.show = !this.showInfo;
			  		this.$emit("listenToShowStatus",this.show);
			  	}
			  }
			
		}
	</script>


<style scoped>
   
	.model {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}

	.model_con {
		position: fixed;
		top: 20%;
		left: 5%;
		width: 90%;
		height: 60%;
		background-color: #fefefe;
		border-radius: .2rem;
	}

    .model_hidden {
		position: absolute;
		z-index: 10;
		top: .1rem;
		right: .2rem;
		color: #fefefe;
	}

	.model_img_wrap {
		width: 100%;
		height: 50%;
		overflow: hidden;
		border-radius: .2rem .2rem 0 0;
	}

	.model_img {
		width: 100%;
	}

	.model_detail_wrap {
		width: 92%;
		height: 56%;
		padding:4%;
		overflow: hidden;
	}

	.model_detail {
		text-indent: 30px;
		line-height: .5rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 6;
		overflow: hidden;
	}

	

</style>
