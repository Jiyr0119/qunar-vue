<template>
	<div class="announce-detail-page">
		<div class="help-header" v-scroll-show>
			<span class="help-header-left iconfont" @click="handleBackBtnClick">&#xe657;</span>
		  	<h1 class="help-header-middle">150元酒店代金劵</h1>
		</div>
		<activies :index="$route.params.id"></activies>
		<span class="back-btn iconfont" v-if="show" @click="handleBackBtnClick">&#xe657;</span>
	</div>
		
	
</template>

<script>
	import detailactive from "./active"
	export default {
		data () {
		    return {
		     	show: true
		    }
		},

		components: {
		   "activies": detailactive     
		},

		methods: {
			handleBackBtnClick: function() {
				this.$router.go(-1);
			}
		},

		directives: {
	        scrollShow: {
	            bind: function(el) {
	                window.addEventListener('scroll', function() {
	                	var speed = 0;
	                	var timer = null;
	                    if ( document.body.scrollTop > el.offsetTop ) {
                            timer = setInterval(function() {
                            	speed += 0.1;
                            	el.style.opacity = speed;
                            	if( speed >= 1 ) {
                            		clearInterval(timer)
                            	}
                            }, 13);
	                    }
	                })
	            }
	        }
	    }
	}
</script>

<style scoped>
	.announce-detail-page {
		position: relative;
	}
	.help-header {
	    position: fixed;
	    width: 100%;
	    top: 0;
	    left: 0;
	    z-index: 100;
	    height: .8rem;
	    text-align: center;
	    color: #fff;
	    background: #1ba9ba;
	    border-bottom: #1b7a8b .02rem solid;
	    opacity: 0;
	}

	.back-btn,
	.help-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .84rem;
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		font-size: .36rem; 
		color: #fff;
	}
	
	.help-header-middle {
		overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    height: .8rem;
	    line-height: .8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
</style>
