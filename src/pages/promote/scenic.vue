<template>
  	<div class="titket-scenic">
  	  <div class="scenic-title">
              <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/caption1.jpg" class="scenic-img"/>
            </div>
            <ul class="scenic">
              <li class="scenic-items" v-for="(items, index) in data" key="index + '_scenic_items'">
                  <div class="scenic-left">
                    <img :src="items.img" class="scenic-left-img"/>
                    <div class="scenic-city">
                      <div class="location-icon"></div>
                      <span class="location-name">{{province}}</span>
                    </div>
                  </div>
                  <div class="scenic-right">
                    <div class="scenic-name">{{items.name}}</div>
                    <div class="scenic-product">{{items.desc}}</div>
                    <div class="scenic-price">
                      <div class="original-price">
                          <div class="price-name">票面价</div><span class="price-num">&yen;{{items.priceOld}}</span>
                      </div>
                      <div class="current-price">
                          <div class="reduction-name">抢购价:</div><span class="reduction-num">&yen;{{items.priceNow}}</span><p class="reduction-con">起</p>
                      </div>
                    </div>
                  </div>
              </li>
            </ul>
  	</div>	
</template>

<script>

export default {
    beforeCreate: function() {
        try {
            var province = window.localStorage.province;
            if (province) {
                this.$emit('provinceChange', province)
            }
        } catch(e) {}
    },
    data () {
        return {
            
        }
    },
    props:["data", "province"]

}
</script>


<style scoped>
	.scenic-title {
      width:100%;
      height: 1.4rem;
    }
    .scenic-img {
      width:100%;
      height:100%;
    }
    .scenic {
      width:93%;
      height: auto;
      margin:0 2.3%;
      border: .1rem solid #000;
      border-bottom: 0;
    }
    .scenic-items {
      width:100%;
      height: 2.08rem;
      border-bottom: .1rem solid #000;
     
    }
    .scenic-left {
      width: 35%;
      height: 2.08rem;
      float: left;
      position: relative;
    }
    .scenic-left-img {
      width: 100%;
      height: 2.08rem;
    } 
    .scenic-city {
      width: 1.32rem;
      height: .4rem;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      left: 0;
      top: 0.08rem;
      color: #fff;
      text-align: center;
      line-height: .4rem;
      border-radius: 0 0.08rem 0.08rem 0;
    }
    .location-icon {
      float: left;
      width: .4rem;
      height: .4rem;
      margin: 0.02rem 0 0 0.02rem;
      background: url(http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2090hotspring02/sprite.png) -4.2rem 0.03rem/6rem 3.2rem no-repeat
;
    }
    .location-name {
      float: left;
    }
    .scenic-right {
      float: right;
      width: 65%;
      height: 2.08rem;
      background: #fff;
    }
    .scenic-name {
      margin:.16rem 0 0 .2rem;
      font-size:.32rem;
      line-height: .56rem;
    }
    .scenic-product {
      margin-left: 3%;
      width: 97%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: .4rem;
      color: #999;
    }
    .scenic-price {
      width: 97%;
      height: .6rem;
      margin-left: 3%;
      margin-top: .4rem;
      line-height: .6rem;
    }
    .original-price {
      float: left;
      color: #ccc;
      text-decoration: line-through;
    }
    .price-name {
      float: left;
      text-decoration: line-through;
    }
    .price-num {
      float: left;
      text-decoration: line-through;
    }
    .current-price {
      float: left;
      margin-left: .5rem;
    }
    .reduction-name {
      float:left;
    }
    .reduction-num {
      float:left;
      color:#F94236;
      font-size: .4rem;
    }
    .reduction-con {
      float:left;
      color: #ccc;
    }
</style>