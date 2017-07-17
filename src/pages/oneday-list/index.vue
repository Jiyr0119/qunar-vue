<template>
	<div class="main">
		<header-component></header-component>
		<fillter-list :datas="datas"></fillter-list>
		<body-main :datas="datas"  @handleFootMenuShow="showFootMenu"></body-main>
		<footer-menu :datas="datas" :footMenuShow="footMenuShow"></footer-menu>
	</div>
	
</template>
@import  "./common/scss/mixin";

<script>
import  "../../utils/iscroll-lite.js";
import header from './header.vue';
import fillterList from './fillterList.vue';
import bodyMain from './bodyMain.vue';
import footerMenu from './footerMenu.vue';
export default {
	data () {
	    return {
	     datas:[],
	     footMenuShow:true
	    }
	},
	components: {
	        "footer-menu": footerMenu,
	        "fillter-list": fillterList,
	        "body-main": bodyMain,
	        "header-component": header
	},
	created(){
	  	this.$http.get('@/../static/oneday-list.json').then(response => {
	  		if( response.body.ret ){
	  			this.datas = response.body;
	  		}
		})
	},
	methods:{
	  	showFootMenu(diffY){
	  		if( diffY > 0 ){
	  			this.footMenuShow = true;
	  		}else{
	  			this.footMenuShow = false;
	  		}
	  	}
	}
	
}
</script>


<style scoped>
	
</style>