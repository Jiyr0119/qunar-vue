<template>
  	<div class="titket">
		<app @delete="handleOff" @provinceChanges="handleProvinceChange"></app>
		<titket-header></titket-header>
		<div class="titket-main">
			<div class="titket-ban">
				<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/banner.jpg" class="ban-img"/>
			</div>
			<div class="titket-active">
				<div class="active-content">来这app更新至最新版本方可享受本活动优惠</div>
			</div>
			<titket-city 
			@moreCityShow="handleClickShow"
			@provinceChange="handleProvinceChange"
			:province="province"
			:moreShow="province"
			></titket-city>
			<titket-scenic 
			:data="nineTicket" 
			:province="province" @provinceChange="handleProvinceChange"></titket-scenic>
			<more-special 
			:propsoff="off" 
			:province="province"></more-special>
			<more-product></more-product>
			<more-province 
			@moreProvinceOff="handleClickOff"
			@provinceChange="handleProvinceChange"
			 v-if="moreProvince" :moreProvinces="moreProvinces"></more-province>
		</div>
		
  	</div>	
</template>

<script>

import app from "./downloadapp"
import header from "./header"
import titketcity from "./city"
import titketscenic from "./scenic"
import morespecial from "./morespecial"
import moreproduct from "./moreproduct"
import moreprovince from "./moreprovince"

var province = "福建";

export default {
	created: function() {
	    this.$http.get('/static/ticketRmb.json').then(response => { 
	      	this.nineTicket  = response.body.data.indexInfo.nineTicket
	      	this.moreProvinces = response.body.data.indexInfo.moreProvinces 
	    }, response => {
	        console.log(调错了)
	    });
    },
    data () {
        return {
     		off: false,
     		nineTicket: [],
     		moreProvinces: [],
     		moreProvince : false,
     		moreShow: false,
     		province: province
        }
    },
	components: {
	  	"app": app,
	  	"titket-header": header,
	  	"titket-city": titketcity,
	  	"titket-scenic": titketscenic,
	  	"more-special": morespecial,
	  	"more-product": moreproduct,
	  	"more-province": moreprovince
	},
	methods:{
		handleOff: function() {
			this.off = true;
			return this.off;
		},
		handleClickOff: function() {
			this.moreProvince = false;
		},
		handleClickShow: function() {
			this.moreProvince = true;
			this.moreShow = true;
		},
		handleProvinceChange: function(province) {
			this.province = province;
		}
	}  
}
</script>

<style scoped>
	.titket-main {
		width:100%;
		height: auto;
		background: #FFEE99;
		position: relative;
	}
	.titket-ban {
		width:100%;
		height: 3.92rem;
	}
	.ban-img {
		width: 100%;
		height: 100%;
	}
	.titket-active {
		width: 100%;
		height: .4rem;
	}
	.active-content {
		width: 80%;
		height: .4rem;
		border-radius: .2rem;
		background: #ffa902;
		margin-left: 10%;
		text-align: center;
		line-height: .4rem;
		color: #fff;
		font-size: .24rem;
	}
	.more-province {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
</style>