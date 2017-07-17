<template>
  	<div>
  		<div class="comment-header"> 			
	  		<a  @click="handleGobackClick" class="header-return iconfont">&#xe685;</a>
	  		<h1 class="comment-header-con">点评</h1>
  		</div>
		
		<div class="comment-con-info" id="box">
			<ul class="comment-ulcon" v-for="(list, index) in lists" :key="index + '_comment_list'">
		  		<li class="comment-list border-top" v-for="(item,liindex) in list">
		  			
		  			<div class="comment-list-head">
			  			<span class="comment-star iconfont">
			  				&#xe604;&#xe604;&#xe604;&#xe604;&#xe604;
			  			</span>
			  			<span v-html="item.time" class="comment-time">{{item.time}}</span>
		  			</div>
		  			
		  			<div class="comment-descr">
			  			<p :class="{isactive:showtext===index*10+liindex}" class="comment-text">
			  				{{item.txt}}
			  			</p>
			  			<div v-if="item.show" class="comment-text-more">
				  			<span @click="handleTextMore(index*10+liindex)" class="iconfont" >
				  				&#xe76d;
				  			</span>
			  			</div>
		  			</div>
		  			
		  			<div class="comment-imgbox" >
		  				<img class="comment-img" 
			  				v-for="(itemimg, imgindex) in item.img" 
			  				:src="itemimg" 
			  				@click="handleOpenImg(imgindex,index*10+liindex)" 
		  				/>
		  				<comment-img 
			  				v-if="showimg===index*10+liindex" 
			  				@closeimgbox="handleCloseImg" 
			  				:imgindex="imgindex"
			  				:propsimglist="item.img">
		  				</comment-img>
		  			</div>
		  			
		  		</li>
		  		<li>
			  		<div v-if="count===index" class="comment-addmore"  @click="handleAddMore">查看更多</div>
			  		<div v-if="count>index" class="comment-addmore" >没有更多了</div>
			  	</li>
	  		</ul>

		</div>		

  	</div>	
</template>

<script>

	import detect from '@/utils/detect.js'
	import commentimg from "./commentimg"

	export default {
	    created: function() {
	        this.$http.get( '/static/commentweekend.json' ).then( response => {
	            this.commentlistInfo = response.body.data.indexInfo;            
	        }, response => {
	            console.log( "get list data error" )
	        });
	    },
	    data () {
		    return {
		        commentlistInfo: [],
		        count: 0,
		        showtext: false,
		        showimg:"",
		        imgindex:""
		    }
	    },
	    components: {
		  	"comment-img": commentimg
		}, 
	  	computed: {
	        lists: function() {
	            var lists = [],
	                length = (this.count+1)*10 >= this.commentlistInfo.length ? this.commentlistInfo.length : (this.count + 1) * 10;
	            for (var i = 0; i < length; i++) {
	            	if(this.commentlistInfo[i].txt.length > 104){
	            		this.commentlistInfo[i].show=true
	            	} else{
	            		this.commentlistInfo[i].show=false
	            	};
	                var list = Math.floor(i / 10); 
	                if ( !lists[list] ) { 
	                    lists[list] = [];
	                }
	                lists[list].push( this.commentlistInfo[i] );
	            }	
	            return lists;
	        }
	    },
	    methods: {
	    	handleTextMore:function(index){	
	    		this.showtext = index;		
	    	},
	    	handleAddMore:function() {		
	    		this.count++;
	    	},
	    	handleGobackClick:function() {
	    		history.go(-1);
	    	},
	    	handleOpenImg:function(imgindex,allindex) {
	    		this.showimg = allindex;
	    		this.imgindex = imgindex;
	    	},
	    	handleCloseImg:function(){
	    		 this.showimg = ""
	    	}	
	    } 
	}
</script>

<style scoped>
	#box .isactive {
		display: block;
	    overflow: visible;
	    text-overflow: visible;
	}
	#box .isactive+.comment-text-more {	
		display: none;
	}
	.comment-header {
		position: relative;
		display: flex;
		flex-flow: row;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.header-return {
		display: inline-block;
		width: 15%;
		text-align: center;
		color:white;
		line-height: .88rem;
	}
	.comment-header-con {
		width: 100%;
		line-height: .88rem;
		color: #fff;
		padding-left: 2.8rem; 
		font-size: .32rem;
		box-sizing: border-box;
	}
	.comment-con-info {
		padding-top: .2rem;
	    background: #f5f5f5;
	    position: relative;
	}
	.comment-ulcon {
		padding-bottom: .88rem; 
		background:#fff;
	}
	.comment-list::before {
		border-color: #999;
	}
	.comment-list {
		position: relative;
		color: #212121;
    	font-size: .28em;
    	padding: 0 .2rem .25rem .55rem ;
    	font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	}
	.comment-list-head {
		display: flex;
		justify-content: space-between;
		flex-flow: row;
		padding: .25rem 0;
	}
	 .comment-star {
	 	color:red;
	 	display: block;	 
	 	font-size: 0.3rem;
	 }
	 .comment-star::after {
	 	margin-right: -.1rem;
	 }
	.comment-time {		
		color: #999;
	    font-size: .26rem;
	    display: block;	   	     
	}
	.comment-text {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: hidden;
	    -webkit-line-clamp:3;
	    -webkit-box-orient:vertical;
	    color: #999;
	    font-size: .28rem;
	    padding-right: .06rem;
	    line-height: .42rem;
	}
	.comment-text-more {
		padding-top:  .16rem;
	    height: .4rem;
	    text-align: center;
	    position: relative;
	}
	.comment-imgbox {
		padding-top: .1rem;
		overflow: hidden;
		width: 90%;
	}
	.comment-img {
		width: 1.05rem;
	    height: 1.05rem;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	    position: relative;
	    float: left;
	    margin: .1rem .2rem 0 0;
	}	
	.comment-addmore::before {	
		border-color:#999;
	}
	.comment-addmore {
		height: .88rem;
		width: 100%;
		position: absolute;
		bottom: 0;
		background: #fff;
		text-align: center;
		font-size: .32rem;
		line-height: .88rem;
		border-top: .02rem dashed #999;	
	}
</style>
