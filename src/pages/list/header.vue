<template>
	<header class="header" @click="handleHeaderClick">
	
  		<div class="header-left" @click="handleReturnClick">
  			<div class="return"></div>
  		</div>
  		<div class="header-title">
  				<input type="text" v-model="value"  class="search-text"  placeholder="输入城市或景点" :value="value"/>
  				<span class="search-del" v-show="value != ''" @click="handleClick" ></span>
  		</div>
  		<div class="header-right" @click = "handleSearchClick(value)">
  			<span class="header-city">
  				搜索
  			</span>  			
  		</div>
  	</header>
</template>

<script>
export default {
  data () {
    return {
    	value: "北京"
    	// delete: true 
    }
  },
  methods:{
  	handleClick(){
  		this.value=""
  	},
  	handleHeaderClick(){
  		this.$emit("headerClick")
  	},
  	handleReturnClick(){
  		this.$router.go(-1)
  	},
  	handleSearchClick(value){

  		this.$emit("searchClick",value)
  	}
  }
}
</script>


<style scoped>

	.header {
	    position: relative;
	    z-index: 5;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}

	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem; 
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}

	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	    padding: 0 .6rem 0 .2rem;	
	}

	.search-text{
		position: relative;
	    display: block;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	}

	.search-del{
		
		position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;	
	    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem 0.05rem no-repeat;
	    background-size: 3rem 3rem;
	}

	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    }

    .header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
    	border-top: 0.13rem solid #fff;
    	position: relative;
    	top:0.22rem;  	
	}
	
    .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
