<template>
<div>
	<promotional-tickets :ticketproductInfo = "ticketInfo" :tickettitleInfo = "tickettitleInfo"></promotional-tickets>
	<hot-recommendation :dataInfo="hotTitleName" :hotproductInfo="hotProductName"></hot-recommendation>
</div>
</template>

<script>
import promotionaltickets from "./promotionaltickets";
import hotrecommendation from './hotrecommendation';
export default {
	created:function(){
		this.$http.get("/static/sales.json").then(response=>{
			if(this.cityid[0] == 3) {
				this.ticketInfo = response.body.data.ticketproductInfoshanghai;
			}else if( this.cityid[0] == 4 ){
				this.ticketInfo = response.body.data.ticketproductInfochongqing;
			}else{
				this.ticketInfo = response.body.data.ticketproductInfo;
			}
			this.tickettitleInfo = response.body.data.tickettitleInfo;
			this.hotTitleName = response.body.data.hotTitleName;
            this.hotProductName = response.body.data.hotTicketInfo;
		}, response=>{
			console.log("get index data error")
		});
	},
	data () {
		return {
			ticketInfo: [],
			hotTitleName: [],
			tickettitleInfo: [],
			hotProductName: [],
			cityid:[]
		}
	},
	mounted() {
		if( window.localStorage.city=="上海" ) {
		    this.cityid.unshift(3);
		}else if( window.localStorage.city=="重庆" ) {
			this.cityid.unshift(4);
		}
	},
	components:{
		"promotional-tickets":promotionaltickets,
	    "hot-recommendation": hotrecommendation
	}
}
</script>

<style scoped>
	
</style>
