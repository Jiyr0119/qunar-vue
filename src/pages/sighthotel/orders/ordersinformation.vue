<template>
<div class="main">
	<div class="orders-information">
		<div class="orders-information-traveller border-bottom">
			<label class="orders-traveller">游客1</label>
			<input type="text" placeholder="游客姓名" class="traveller-name">
			<span class="orders-login iconfont customer">&#xe613;</span>
		</div>
		<div class="orders-phone">
			<label class="orders-traveller">手机号</label>
            <router-link to="/phonearea">
    			 <span class="phone-area iconfont border">{{$store.state.code}}&#xe768;</span>
            </router-link>
			<input type="text" placeholder="请填写手机号" class="phone-call">
		</div>
	</div>
	<div class="orders-supplier">
		<label class="orders-traveller" >供应商</label>
		<span class="supplier-name">易游假期旅行社</span>
		<span class="supplier-call iconfont customer border-left">&#xe609;</span>
	</div>

	<div class="sumbit-price">
		<div class="price border-top">	
			<span class="product-price">产品价格 &yen; <span class="price-number">916</span><span class="product-show iconfont" @click="productShow" >&#xe667;</span></span>
			<button class="submit-order">提交订单</button>
		</div>	
		<div class="product-info" v-show="seen">
			<p class="info-title">北京热带雨林风情园温泉酒店+欧式私汤小院住宿；小汤山温泉；纯正温泉水；【欧式温泉小院房】</p>
			<span class="info-price">&yen;458×2</span>
		</div>
        <div class="layer" v-show="seen"></div>
	</div>
	
              
</div>
</template>

<script>

export default {
  
    data() {
      return {
        "seen":false,
      }
    },

    methods: {
        productShow: function() {
            this.seen = !this.seen
        }      
    }
   
}

</script>


<style scoped>
  	.main {
        position: relative;
        overflow: hidden;
        min-height: 1.1rem;
        margin: .2rem 0;
    }
    .orders-information {		
		    background: #fff;
    }
    .orders-information-traveller {
      	position: relative;
      	min-height: .5rem;
  		  padding: .24rem;
    }
    .orders-phone {
      	min-height: .5rem;
  		  padding: .24rem;
    }
    .orders-traveller {
      	float: left;
      	width: 1.6rem;
      	color: #616161;
      	font-size: .3rem;
      	line-height: .5rem;
    }
    .phone-area  {
    		display: absolute;
    		display: inline-block;
    		min-width: .4rem;
    		max-width: 1rem;
    		margin-right: .1rem;
    		padding: 0 .24rem 0 .06rem;
    		text-align: right;
    		overflow: hidden;
    		font-size: .28rem;
    		line-height: .5rem;
    		white-space: nowrap;
    		text-overflow: ellipsis;
    		color: #888;
    }
   .phone-call {
        font: normal .32rem/.38rem;
        border: 0 none;
        outline: 0 none;
        height: .38rem;
        margin-top: -0.4rem;
    } 
    .customer {
      	position: absolute;
      	top: .26rem;
      	right: .2rem;
      	width: .4rem;
      	height: .5rem;
      	color: #1ba9ba;
      	display: inline-block;
      	font-size: .32rem;
      	line-height: .5rem;
      	text-align: center;
    }
    .orders-supplier {
      	position: relative;
      	margin-top: .2rem;
      	min-height: .5rem;
    		padding: .24rem;
    		background: #fff;
    }
    .traveller-name {
      	font: normal .32rem/.38rem;
      	border: 0 none;
      	outline: 0 none;
    }
    .supplier-name {
    		font-size: .3rem;
    		line-height: .5rem;
    }
    .price {
    	  overflow: hidden;
        z-index: 94;
        background: #fff;
    }
   .sumbit-price {
       	position: fixed;
       	z-index: 94;
       	left: 0;
       	bottom: 0;
       	right: 0;
       	width: 100%;
       	height: 1rem;
       	background: #fff;
   }
   .product-info {
     		position: absolute;
     		right: 0;
     		bottom: 1rem;
     		left: 0;
     		width: 100%;
     		padding: .15rem .2rem;
        z-index: 94;
     		background:#fff;
     		box-sizing: border-box;
   }
   .product-price {
     		position: relative;
     		float: left;
     		font-size: .24rem;
     		line-height: 1rem;
     		text-indent: .2rem;
     		width: 50%;
     		color: #ff8300;
   }
   .price-number {
   		  font-size: .48rem;
   }
   .product-show {
   	    color: #c1c1c1;
   }
   .submit-order {
     		float: right;
     		border: 0 none;
     		background: #ff9800;
     		color: #fff;
     		font-size: .36rem; 
     		line-height: 1rem; 
     		text-align: center;
     		width: 50%;   		
   }
   .info-title {
     		color: #212121;
     		font-size: .32rem;
     		line-height: .44rem;
     		margin-bottom: .04rem;
   }
   .info-price {
     		height: .44rem;
     		line-height: .44rem;
     		color: #9e9e9e;
     		font-size: .24rem;
   }
   .layer {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 91;
        background:rgba(0,0,0,.5);
   }
   
</style>


