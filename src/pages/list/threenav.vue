<template>
<div id="wrapper-three" v-show="show">
	<div class="threenav"  id="scroller-three">

		<div class="three-items" v-for="item in threeInfo" @click="handlethreenavClick"  :data-playItem="item.itemtitle" >
			{{item.itemtitle}}
			<span class="three-items-count">
				{{item.visitedNum}}
			</span>
		</div>

	</div>
</div>
</template>

<script>
import "../../utils/iscroll-lite.js";

export default {
	updated() {
		new IScroll("#wrapper-three",{scrollX:false,scrollY:true,mouseWheel:true});
	},
	data() {
		return {

		}
	},

	props:["threeInfo","show"],
	
	methods: {
		handlethreenavClick(e){
			this.$router.go(0);
			this.$emit("threenavClick");
			var playItem = e.target.innerText.split(" ")[1];
			try{
				playItem = playItem=="" ? "全部分类" : playItem;
				window.localStorage.playItem = playItem;

			}catch(err){}
		}
	}
	
}
</script>


<style scoped>
	#wrapper-three{
		width: 50%;
		height: 4.8rem;
		background: #f1f1f1;
		overflow: hidden;
		position: absolute;
		right: 0;
		top: .8rem;
	}
	.threenav{
		width: 100%;
		min-height: 100%;
		background: #f1f1f1;
	}
	.three-items{
		height: .8rem;
		line-height: .8rem;
		padding-left: .3rem;
		color: #212121;
	}
	.three-items-count{
		float: right;
	    margin-right: .2rem;
	    color: #9e9e9e
	}
</style>
