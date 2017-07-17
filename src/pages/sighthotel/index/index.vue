<template>
    <div class="main">
      <index-header></index-header>
      <imgs-swiper :data="swiperInfo"></imgs-swiper>
      <sights-classify :icons="iconInfo" :recommends="recommendInfo"></sights-classify>
      <travel :travelInfo="travelInfo"></travel> 
  		<index-product :data="productInfo"></index-product>
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import sightsclassify from './sightsclassify'
import travel from './travel'
import product from "./product"

export default {
    created: function(){
      this.$http.get('/static/sighthotel.json').then(response => {
        this.swiperInfo = response.body.data.swiperInfo;
        this.iconInfo = response.body.data.iconInfo;
        this.recommendInfo = response.body.data.recommendInfo;
        this.travelInfo = response.body.data.travelInfo;
        this.productInfo = response.body.data.productInfo;
      }, response => {
        console.log("get index data error")
      });
    },
    data() {
      return {
        swiperInfo: [],
        iconInfo: [],
        recommendInfo: [],
        travelInfo: [],
        productInfo: []
      }
    },
    components: {
        "index-header":header,
        "imgs-swiper": imgswiper,
        "sights-classify":sightsclassify,
        "travel":travel,
        "index-product": product 
    }
}


</script>


<style scoped>
  	.main {
  		position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 100%;
      background: #f5f5f5;
  	}

</style>

