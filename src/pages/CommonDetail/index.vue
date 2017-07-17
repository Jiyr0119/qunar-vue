<template>

    <div class="main">
		<topBar></topBar>
        <detail-header :swiperData="swiperInfo" :titleData="titleInfo"></detail-header>
        <introduction></introduction>
        <recommend :recommendData="recommendInfo"></recommend>
        <product :data="productInfo"></product>
       	<download></download>
        <detail-comment :data="commentInfo" :dataImg="commentImg"></detail-comment>
        <detail-recommended :data="recommendedInfo"></detail-recommended>
        <detail-footer></detail-footer>
    </div>

</template>

<script >
import topBar from './topBar'
import header from './detail_header'
import download from './download'
import address from './address'
import recommend from './recommend'
import comment from './comment'
import recommended from './recommended'
import footer from './footer'
import product from './product'

export default {
	created: function() {
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
				this.swiperInfo = response.body.data.swiperInfo;
				this.titleInfo = response.body.data.titleInfo;
				this.recommendInfo = response.body.data.recommendInfo;
				this.productInfo = response.body.data.productInfo;
                this.recommendedInfo= response.body.data.recommendedInfo;
                this.commentInfo=response.body.data.commentInfo;
                this.commentImg=response.body.data.commentImg;
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
	
    data () {
        return {
            swiperInfo:[],
            titleInfo:[],
            recommendInfo:[],
            productInfo:[],
            recommendedInfo:[],
            commentInfo:[],
            commentImg:[]
        }
    },
    
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address,
        "recommend": recommend,
        "product": product,
        "detail-comment":comment,
        "detail-recommended":recommended,
        "detail-footer": footer,
		"topBar": topBar
	}
}
</script>


<style scoped>
	.main{
		position: absolute;
		left:0;
		top:0;
		width:100%;
		min-height: 100%;
		background:#f5f5f5;
	}
</style>

