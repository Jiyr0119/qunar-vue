<template>
	<div id="qunarFooter" class="lz_footer">
		<div class="main_nav_wrapper">
			<ul class="main_nav" id="qunarFooterUL" v-bind:style="styleObject">
				<li class="flight">
					<a href="//touch.qunar.com/h5/flight/">
						<span class="iconfont" >&#xe65a;</span>
						<span class="title">机票</span>
					</a>
				</li>
				<li class="hotel">
					<a href="//touch.qunar.com/h5/hotel/">
						<span class="iconfont" >&#xe612;</span>
						<span class="title">酒店</span>
					</a>
				</li>
				<li class="gongyu">
					<a href="//touch.qunar.com/h5/hotel/">
						<span class="iconfont" >&#xe63f;</span>
						<span class="title">公寓</span>
					</a>
				</li>
				<li class="tuan">
					<a href="http://touch.qunar.com/h5/group/grouplist">
						<span class="iconfont" >&#xe66f;</span>
						<span class="title">团购</span>
					</a>
				</li>
				<li class="train">
					<a href="http://touch.qunar.com/h5/train/">
						<span class="iconfont" >&#xe61f;</span>
						<span class="title">火车票</span>
					</a>
				</li>
				<li class="jingdian actived">
					<span class="iconfont" >&#xe60e;</span>
					<span class="title">景点</span>
				</li>
				<li class="zuche">
						<span class="iconfont" >&#xe62b;</span>
						<span class="title">接送机</span>
				</li>
				<li class="dujia">
					<a href="//touch.dujia.qunar.com">
						<span class="iconfont" >&#xe624;</span>
						<span class="title">度假</span>
					</a>
				</li>
				<li class="gonglue">
					<a href="http://touch.travel.qunar.com/">
						<span class="iconfont" >&#xe623;</span>
						<span class="title">攻略</span>
					</a>
				</li>
				<li class="lvtu">
					<a href="http://touch.lvtu.qunar.com">
						<span class="iconfont" >&#xe649;</span>
						<span class="title">旅图</span>
					</a>
				</li>
				<li class="cheche">
					<a href="http://cheche.qunar.com/?from=28">
						<span class="iconfont" >&#xe632;</span>
						<span class="title">车车</span>
					</a>
				</li>
				<li class="dangdiren">
					<a href="http://dangdi.qunar.com/touch/localman/city-list">
						<span class="iconfont" >&#xe622;</span>
						<span class="title">当地人</span>
					</a>
				</li>
				<li class="tag" v-on:click="lzFooterToggle" v-bind:style="styleObjecttop">
					<span v-show="isShow"><span class="iconfont icon-more">&#xe628;</span>更多</span>
					<span v-show="isHide"><span class="iconfont icon-packup">&#xe671;</span>收起</span>
				</li>				
			</ul>
		</div>
			<ul class="footer_nav clearfix" id="qunarFooterBottom">
				<li>
					<a href="//touch.qunar.com/h5/user/login">登录</a>
				</li>
				<li>
					<a href="//touch.qunar.com/h5/user/usercenter">我的订单</a>
				</li>
				<li style="display: none;">
					<a href="//touch.qunar.com/h5/user/usercenter">个人中心</a>
				</li>
				<li>
					<a href="//touch.qunar.com/h5/recent">最近浏览</a>
				</li>
				<li>
					<a href="//touch.qunar.com/h5/about">关于我们</a>
				</li>
			</ul>
			<ul class="mobile_pc clearfix">
				<li class="active">
					<a href="//touch.qunar.com/h5/">触屏版</a>
				</li>
				<li>
					<a href="http://www.qunar.com/index.htm?from=mobile&amp;lz163=1" onclick="computer()">电脑版</a>
				</li>
			</ul>
			<div class="copyright">
				<span>Qunar 京ICP备05021087</span>
				<a class="lz_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a>
			</div>
	</div>

</template>

<script>

	export default {
	  	data () {
			return{
				isShow:true,
				isHide:false,

			    styleObject: {
			   		height: '25px'
			    },

				styleObjecttop:{
					top:'8px'
				}
			}	
		},

		methods: {

		  	lzFooterToggle:function (){
		  		if(this.isShow){
		  			this.styleObject.height="110px"
			  		this.styleObjecttop.top="97px"
					this.isShow=!this.isShow
					this.isHide=!this.isHide
		  		}else{
		  			this.styleObject.height="25px"
			  		this.styleObjecttop.top="8px"
					this.isShow=!this.isShow
					this.isHide=!this.isHide
		  		}
		  	}
	  	}
	}

</script>

<style scoped>
	.iconfont{
		float: left;
		width:.38rem;
		height:.38rem;
		border-radius:50%;
		border:2px solid #ccc;
		font-size: .32rem;
		color:#ccc;
		text-align: center;
		line-height: .38rem;
	}

	.tag .icon-more, .tag .icon-packup{
		border:none;
		font-size: .36rem;
	}
	
	.lz_footer {
	    background: #f3f3f3;
	}

	.lz_footer .main_nav {
	    position: relative;
	    width: 300px;
	    height: 25px;
	    margin: 0 auto;
	    padding: 10px 10px 0 10px;
	    overflow: hidden;
	}

	.lz_footer .main_nav li {
	    margin: 0px;
	    padding-left: 10px;
	    height: 31px;
	    width: 65px;
	    float: left;
	    position: relative;
	    background: none;
	}

	.lz_footer .main_nav li a {
	    display: block;
	    height: 22px;
	    width: 100%;
	    font-size: 12px;
	}

	.lz_footer .main_nav .flight .icon {
	    background-position: 0 0;
	}

	.lz_footer .main_nav li .title {
	    float: left;
	    display: inline-block;
	    color: #9e9e9e;
	    margin: 3px 0 0 5px;
	    border-bottom: 1px solid #acacac;
	    font-size: 12px;
	}

	.lz_footer .main_nav li.tag {
	    position: absolute;
	    top: 8px;
	    right: 6px;
	    background: #f3f3f3;
	    font-size: 14px;
	    color: #9e9e9e;
	    width: 70px;
	    text-align:center;
	    padding-top:.1rem;
	}

	.lz_footer .footer_nav {
	    width: 100%;
	    height: 39px;
	    border-bottom: 1px solid #cacaca;
	}

	.lz_footer .footer_nav li {
	    float: left;
	    padding-left: 20px;
	}

	.lz_footer .footer_nav li a {
	    position: relative;
	    color: #25a4bb;
	    font-size: 14px;
	    line-height: 39px;
	}

	.lz_footer .mobile_pc {
	    padding: 10px 0 0 0;
	    text-align: center;
	}

	.lz_footer .mobile_pc li {
	    display: inline-block;
	    margin: 0 15px;
	}

	.lz_footer .mobile_pc .active a {
	    color: black;
	}

	.lz_footer .mobile_pc a {
	    font-size: 14px;
	    color: #25a4bb;
	}

	.lz_footer .copyright {
	    color: #9e9e9e;
	    text-align: center;
	    font-size: 14px;
	    padding: 10px;
	}

	.lz_footer .copyright {
	    color: #9e9e9e;
	    text-align: center;
	    font-size: 14px;
	    padding: 10px;
	}

	.lz_footer .copyright a {
	    color: #9e9e9e;
	    height: 33px;
	}
</style>
