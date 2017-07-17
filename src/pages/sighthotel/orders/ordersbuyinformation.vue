<template>
<div class="main">
	<div class="focus-outer">
		<label class="row-field">购买数量</label>
		<span class="limit-desc">最多买5张</span>
		<span class="available-count">剩余5张</span>
		<div class="input-number border">
			<span class="input-minus number iconfont">&#xe620;</span>
			<input type="tel" max="5" min="1" value="0" class="input-number-input" />
			<span class="input-adds number iconfont">&#xe610;</span>
		</div>
	</div>
</div>
</template>

<script>


export default {
    
    data() {
      return {
      
      }
    }
   
}


</script>


<style scoped>
  	.main {
        position: relative;
        overflow: hidden;
        min-height: 1.1rem;
        background: #fff;
        margin: .2rem 0;
    }
    .focus-outer {
    	padding: .22rem .2rem .24rem .2rem;
    }
    .row-field {
    	position: relative;
    	float: left;
    	width: 1.6rem;
    	color: #616161;
    	font-size: .3rem;
    	line-height: .5rem;
    }
    .limit-desc {
    	position: absolute;
    	left: 1.6rem;
    	margin-right: 2.1rem;
    	color: #ccc;
    	font-size: .28rem;
    	line-height: .5rem;
    }
    .available-count {
    	position: absolute;
    	right: .2rem;
    	bottom: .06rem;
    	color: #ff4501;
    	font-size: .2rem;
    }
    .input-number {
    	position: absolute;
    	right: .2rem;   	
    }
    .border::before {
    	border-color: #c7ced4;
    }
    .input-number-input {
    	width: .6rem;
    	height: .6rem;
    	padding: 0 .06rem;
    	border: 0 none;
    	font: normal .28rem/.6rem arial;
    	text-align: center;
    	vertical-align: top;
    	outline: 0 none;
    }
    .number {
    	position: relative;
    	display: inline-block;
    	width: .56rem;
    	height: .56rem;
    	margin: .02rem;  	
    	background: #00afc7;
    	text-align: center;
    	line-height: .56rem;
    	font-size: .3rem;
    	color: #fff;
    }
</style>


