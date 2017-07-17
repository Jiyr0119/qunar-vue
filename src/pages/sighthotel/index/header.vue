<template>
	<div class="header">
		<header class="j-header">
			<a class="j-header-left iconfont" mp-role="left">&#xe657;</a>
			<h1 class="j-header-title" mp-role="title">
				<router-link to="/city">
					<span class="j-header-title-extend">北京</span>
				</router-link>
			</h1>
			<span class="j-header-right" mp-role="right">
				<router-link to="/city">
					<span class="j-header-search iconfont">&#xe6d1;</span>
				</router-link>
			</span>
		</header>
	</div>
</template>

<script>


export default{
	data() {
		return {
			
		}
	}
}


</script>

<style scoped>
	.j-header{
		position: fixed;
		width:100%;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.j-header-left{
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    position: absolute;
	    font-size: .36rem;
	    color: #fff;
	    text-align: center;
	}
	.j-header-title{
	    overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
	.j-header-title-extend{
	    display: inline-block;
        position: relative;
    	min-width: .88rem;
    	height: .88rem;
    	color: #fff;
	}
	.j-header-right{
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #fff;
	}
	.j-header-search{
	    display: block;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    font-size: .36rem;
	    color: #fff;
	}
	.j-header-title-extend::after {
	    content: '\0020';
	    overflow: hidden;
	    position: absolute;
	    top: .4rem;
	    right: -.2rem;
	    width: 0;
	    height: 0;
	    border: .1rem solid transparent;
	    border-top: .15rem solid #fff;
	    border-bottom-width: 0;
	}
</style>
