<template>

	<div class="comment-container border-bottom">
		<h3 class="comment-title">用户评论</h3>
		<div class="comment-list" v-for="(item, index) in data" :key="index + '_imgswiper_item'">
			<div class="comment-item border-top">
				<div class="comment-stardate"><span class="lzf-starlevel">
					<i class="iconfont lzf-starlevel-gain" style="width:100.0%">&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;</i>
					</span><span class="comment-date">z*9&nbsp;&nbsp;2017-06-23</span>
				</div>
				<p class="comment-content" v-bind:style="styleHeigth" >{{item.commentContent}}
				</p>
				<div :id="index+'0'" class="comment-foldbtn mp-iconfont" data-status="fold" v-on:click="commentFoldBtn">
					<span>∨</span>

				</div>
				<div class="comment-imgs" mp-role="scrollImages">
					<div class="comment-imgouter" v-for="(item,index) in dataImg" :key="index + 'comment-imgs'">
						<div class="comment-imginner">
							<img class="comment-img" mp-role="lazyLoadImg" data-original-src="" data-bigimg="" :src="item.commentImglist" @click="handleClickMask"/>
						</div>
					</div>
					<div class="comment-imgnumtag"><span class="commenttag-bg">
						</span><span class="comment-tagnum">共9张</span>
					</div>
				</div>
			</div>		
		</div>
		<a href="/#/comment" mp-role="commentLink">
			<div class="more-refresh border-top">
				查看全部评论
				<span class="mp-iconfont">></span>
			</div>
		</a>
		<div class="lz-swiper" v-show="seen">
			<div class="lz-slide-closebutton">
				<span class="iconfont " @click="handleClickClose">&#xe621;</span>
			</div>
			<div class="lz-swiper-show js-slider-picture lz-swiper-current" style="left: 0px;">
				<div class="lz-swiper-img" >
					<img src="" class="mask-img" />
				</div>
			</div>
			<div class="lz-swiper-show js-slider-picture-back"></div>
			<div class="lz-swiper-bar">
				<div class="lz-swiper-note">
					<em class="js-slider-name"></em>
					<span class="js-slider-namesub">(1/1)</span>
				</div>
				<div class="lz-swiper-turn lz-swiper-prev lz-swiper-disabled">
					<span class="mpg-iconfont"><</span>
				</div>
				<div class="lz-swiper-turn lz-swiper-next lz-swiper-disabled">
					<span class="mpg-iconfont">></span>
				</div>
			</div>
		</div>	
	</div>

</template>

<script>

export default {

    data () {
        return {
			styleHeigth:{
				height:"105px",
				overflow:"hidden"
			},

			seen:false
        }
    },

    methods:{
		commentFoldBtn: function (e) {
			//操作dom
			var id=e.currentTarget.id
			var height=document.getElementById(id).previousSibling
			var loadMore=document.getElementById(id).firstChild
			if(height.previousSibling.style.height=="105px"){
				height.previousSibling.style.height="auto";
				height.previousSibling.style.overflow="auto";
				loadMore.innerHTML="∧"
			}else{
				height.previousSibling.style.height="105px";
				height.previousSibling.style.overflow="hidden";
				loadMore.innerHTML="∨"
			}
		},

		handleClickMask: function (e) {
			this.seen = true;
			var maskImg=document.getElementsByClassName("mask-img")[0]
			maskImg.setAttribute("src",e.currentTarget.src)
		},

		handleClickClose: function () {
			this.seen = false;
		}
    },

    props: ["data","dataImg"]
	
}
</script>

<style scoped>

	.comment-container {
	    margin-top: .2rem;
	}

	.comment-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}

	.comment-list {
	    background: #fff;
	}

	.comment-item {
	    padding: .1rem .2rem .3rem .2rem;
	}

	.comment-stardate {
	    margin-top: .1rem;
	    line-height: .6rem;
	}

	.lzf-starlevel {
		vertical-align: middle;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}

	.lzf-starlevel-gain {
	    z-index: 2;
	    color: #00bcd4;
	    margin-bottom:1rem
	}

	.comment-date {
	    position: relative;
	    float: right;
	    top: .16rem;
	    margin-left: .2rem;
	    line-height: .28rem;
	    font-size: .24rem;
	    vertical-align: middle;
	    color: #212121;
	}

	.comment-content {
	    word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    font-size: .26rem;
	    color: #616161;
	}

	.comment-foldbtn {
	    height: .48rem;
	    line-height: .48rem;
	    text-align: center;
	    font-size: .26rem;
	    color: #9e9e9e;
	}

	.comment-imgs {
	    margin: .2rem 0 .1rem 0;
	    position: relative;
	    zoom: 1;
	    overflow: hidden;
	}

	.comment-imginner {
	    margin-left: .07rem;
	    margin-right: .07rem;
	}

	.comment-imgouter {
	    float: left;
	    width: 33.33%;
	    margin-bottom: .1rem;
	}

	.comment-img {
	    width: 100%;
	    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png);
	    background-size: contain;
	}

	a {
	    color: #00afc7;
	    text-decoration: none;
	}

	.more-refresh {
	    position: relative;
	    margin-top: -.02rem;
	    height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    z-index: 2;
	}

	.more-refresh .mp-iconfont {
	    margin-left: .1rem;
	    color: #616161;
	    font-size: .2rem;
	}

	.lz-swiper {
	    overflow: hidden;
	    position: fixed;
	    z-index: 99;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    background-color: #000;
	}

	.lz-slide-closebutton {
	    position: absolute;
	    z-index: 3;
	    top: 1.6rem;
	    right: .4rem;
	    width: .4rem;
	    height: .6rem;
	    padding: .2rem;
	    color: #fff;
	    font-size: .6rem;
	    -webkit-border-radius: .3rem;
	    -moz-border-radius: .3rem;
	    border-radius: .3rem;
	}

	.lz-slide-closebutton  span{
		display:inline-block;
		font-size:.56rem;
		text-align:center;
	}

	.lz-swiper-current {
	    z-index: 2;
	}

	.lz-swiper-show {
	    position: absolute;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	   
	}

	.lz-swiper-img {
	    height: 100%;
	    width:100%;
	    position: absolute;
	    z-index:100;
	}
	
	.lz-swiper-img .mask-img{
		width:100%;
		margin-top:50%;
	}

	.lz-swiper-show {
	    position: absolute;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	    
	}

	.lz-swiper-bar {
	    position: absolute;
	    z-index: 9;
	    right: 0;
	    bottom: .4rem;
	    left: 0;
	    color: #fff;
	}

	.lz-swiper-note {
	    height: .8rem;
	    font-size: .24rem;
	    line-height: .8rem;
	    text-align: center;
	}

	.lz-swiper-disabled {
	    opacity: .5;
	}

	.lz-swiper-prev {
	    left: .4rem;
	}

	.lz-swiper-turn {
	    position: absolute;
	    top: 0;
	    width: .8rem;
	    height: .8rem;
	    background: rgba(51,51,51,.8);
	    font-weight: bold;
	    font-size: .4rem;
	    text-align: center;
	    vertical-align: middle;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	}

	.lz-swiper-turn .mpg-iconfont {
	    line-height: .8rem;
	}

	.lz-swiper-disabled {
	    opacity: .5;
	}

	.lz-swiper-next {
	    right: .4rem;
	}

	.lz-swiper-turn .mpg-iconfont {
	    line-height: .8rem;
	}
</style>