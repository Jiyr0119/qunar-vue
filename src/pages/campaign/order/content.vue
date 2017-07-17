<template>
	<div class="order-content">
        <div class="order-info-outer">
            <div class="order-info-main">
                <h2 class="order-info-title">【休闲轻食】小苏州千禧福团 320g*2盒（包邮）</h2>
            </div>    
            <div class="order-info-sub">
                <p>每次参与人数越多，夺取宝贝几率越大</p>
            </div>             
        </div>

        <div class="order-focus-outer">
            <div class="order-row">
                <label class="order-row-field">购买数量</label>
                <div class="order-number-outer">
                    <div class="order-input">
                    	<span class="order-number-minus" :class="{'order-number-minus-click':seen}"  @click="handleMinus">
                    		<span class="order-number-horizontal" :class="{'order-number-horizontal-left':seen}"></span>
                    	</span>
                    	<input type="tel" max="60" min="1" v-model="number" class="order-input-con">
                    	<span class="order-number-plus "  :class="{'order-number-plus-click':show}" @click="handlePlus">
                    		<span class="order-number-horizontal order-number-horizontal-right"  :class="{'order-number-horizontal-right-click':show}">
                    			<span class="order-number-vertical" :class="{'order-number-horizontal-right-son':show}"></span>
                    		</span>                       		
                    	</span>
                    </div>
                    <div class="order-shortcuts-list">
                        <div class="order-shortcuts-item">
                        	<span class="order-shortcuts-number" @click="handleFive">5</span>
                        </div>
                        <div class="order-shortcuts-item">
                        	<span class="order-shortcuts-number" @click="handleTen" >10</span>
                        </div>
                        <div class="order-shortcuts-item">
                        	<span class="order-shortcuts-number" @click="handleFifteen">15</span>
                        </div>
                        <div class="order-shortcuts-item" @click="handleTwenty">
                        	<span class="order-shortcuts-number">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

		<div class="order-note-outer">
            <p class="order-note-inner">联系人信息</p>
        </div>

		<div class="order-contact">
            <div class="order-contact-row">
                <label class="order-row-field" for="phoneNumber">手机号</label>
                <div class="order-row-value">
                    <div id="selectCountryCode">
                        <span class="order-field-menu" id="mobileCountryCodeLabel">
                        	+86
                        	<span class="order-field-menugt" >&gt;</span>
                        </span>                          
                    </div>  
                    <input type="tel" value="17600223044" placeholder="用于接收确认短信" class="order-textinput" name="phoneNumber">                     
                </div>
            </div>
        </div>
		
		<div class="order-lottery-notice">
            <label class="order-lottery-agreetext">我已阅读并同意</label>
            <router-link to="showtext">
            	<a class="order-lottery-link">《一元夺宝协议》</a>
            </router-link>
        </div>

	</div>
</template>

<script>
	export default {		
		data () {
			return {
				number: 1,
				seen: false,
				show: false
			}
		},

		methods: {
			handleMinus: function() {
				this.number--
			},

			handlePlus: function() {
				this.number++
			},

			handleFive: function() {
				this.number = 5
			},

			handleTen: function() {
				this.number = 10
			},

			handleFifteen: function() {
				this.number = 15
			},

			handleTwenty: function() {
				this.number = 20
			}
		},

		watch:{
			number: function() {
				if(this.number > 1 ) {
					this.seen = true
				}else{
					this.number = 1
					this.seen =false
				}
				if(this.number >= 66 ) {
					this.show =true
					this.number = 66
				}else {
					this.show= false
				}
				this.$emit("listenToChildEvent", this.number)
			}
		}
	}
</script>


<style scoped>
	.order-info-outer {
	    margin: .2rem .2rem -.06rem;
	}

	.order-content {
	    position: relative;
	}

	.order-info-title {
	    color: #333;
	    font-size: .32rem;
	    line-height: .42rem;
	}

	.order-info-sub {
	    position: relative;
	    margin-top: .05rem;
	    color: #888;
	    font-size: .28rem;
	    line-height: .46rem;
	}

	.order-focus-outer {
	    border-top: 1px dashed #dadada;
	    position: relative;
	    margin: .2rem 0;
	    background-color: #fff;
	}

	.order-focus-outer::before,
	.order-focus-outer::after {
	    content: "\0020";
	    position: absolute;
	    z-index: 2;
	    top: -.12rem;
	    width: .2rem;
	    height: .2rem;
	    border: 1px solid #dadada;
	    background: #fff;
	    -webkit-border-radius: .24rem;
	    -moz-border-radius: .24rem;
	    border-radius: .24rem;	   
	}

	.order-focus-outer::before {
		 left: -.12rem;
	}

	.order-focus-outer::after {
	    right: -.12rem;
	}

	.order-row::after {
	    content: "\0020";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #d5d5d5;
	}

	.order-row {
		overflow: hidden;
	    min-height: .5rem;
	    padding: .2rem;
	}

	.order-row-field {
	    width: 1.6rem;
	    color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .5rem;	
	}

	.order-number-outer {
	    padding: 0 .64rem;
	}

	.order-input {
		width: 100%;
  		margin-top: .16rem;  		
   		display: inline-block;
	    position: relative;
	    border: .02rem solid #a0a0a0;
	}

	.order-input-con {
	    width: 62%;
	    height: .74rem;
	    padding: 0 .06rem;
	    border: 0 none;
	    font: normal .28rem/.6rem arial;
	    text-align: center;
	    vertical-align: top;
	}

	.order-number-horizontal {
	    position: absolute;
	    top: .32rem;
	    left: .2rem;
	    width: .3rem;
	    height: .06rem;
		background-color: #cad1d7;
	}

	.order-number-horizontal-left {
	    background-color: #fff;
	}    
	
	.order-number-horizontal-right {
		background-color: #fff;
	}
	
	.order-number-horizontal-right-click {
		background-color: #cad1d7;
	}
	
	.order-number-vertical {
	    top: -.1rem;
	    left: .12rem;
	    width: .06rem;
	    height: .28rem;
        position: absolute;
    	background-color: #fff;
	}

	.order-number-horizontal-right-son {
		background-color: #cad1d7;
	}

	.order-number-minus {
	    position: relative;
	    top: .02rem;
	    left: .01rem;
	    display: inline-block;
	    width: .7rem;
	    height: .7rem;
	    margin: .02rem;
        background-color: #f0f0f0;
	}
	
	.order-number-minus-click {
	    background-color: #1ba9bb;
	}

	.order-number-plus {
	    position: absolute;
	    top: .02rem;
	    right: .02rem;
	    display: inline-block;
	    width: .7rem;
	    height: .7rem;
	    margin: .02rem;
	    background-color: #1ba9bb;
	}

	.order-number-plus-click {
	    background-color: #f0f0f0;
	}

	.order-shortcuts-list {
	    overflow: hidden;
	    margin: .2rem 0 .1rem -.2rem;
	}

	.order-shortcuts-item {
	    float: left;
	    width: 25%;
	}

	.order-shortcuts-number {
	    display: block;
	    margin-left: .2rem;
	    height: .54rem;
	    border: .02rem solid #a0a0a0;
	    color: #333;
	    font-size: .28rem;
	    line-height: .54rem;
	    text-align: center;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}

	.order-note-outer {
	    margin: 0 .2rem -.2rem;
	    color: #888;
	    font-size: .24rem;
	    line-height: .4rem;
	}

	.order-note-inner {
	    min-height: .4rem;
	}

	.order-contact {
	    position: relative;
	    margin: .2rem 0;
	    background-color: #fff;
	}

	.order-contact::before {
		content: "\0020";
		overflow: hidden;
	    position: absolute;
		left: 0;
	    width: 100%;
	    height: 1px;
	    z-index: 2;
	    background: #dadada;	    
	}

	.order-contact::after {
		content: "\0020";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #d5d5d5;
	}

	.order-contact-row {
		overflow: hidden;
	    min-height: .5rem;
	    padding: .2rem;
	    position: relative;
	    background: #fff;
	}

	.order-row-field {
	    float: left;
	    width: 1.6rem;
	    color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .5rem;
	}

	.order-row-value {
	    margin-left: 2.4rem;
	    position: relative;
	    margin-left: 1.7rem;
	    line-height: .5rem;
	}

	.order-field-menu {
	    overflow: hidden;
	    float: left;
	    padding-right: .3rem;
	    color: #333;
	    font-size: .28rem;
	    line-height: .5rem;
	    text-indent: .1rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}

	.order-field-menugt {
	    color: #a6afb8;
	    font-size: .24rem;
	    line-height: .5rem;
	}

	.order-textinput {
		float: left;
		width: 70%;
		line-height: .5rem;
	    height: .36rem;
	    padding: .06rem 0;
	    font-size: .36rem;
	    border: 0;
	    color: #000;
	}

	.order-lottery-notice {
	    font-size: .24rem;
	    margin: .1rem .2rem 1rem;
	    line-height: .36rem;
	}

	.order-lottery-agreetext {
	    color: #999;
	    vertical-align: middle;
	}

	.order-lottery-link {
	    color: #1ba9ba;
	}

</style>