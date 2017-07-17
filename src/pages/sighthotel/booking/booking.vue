<template>
  <transition>
      <div class="booking-main" v-show="show">
  		  <div class="booking-header">
          <h2 class="header-title">
            <p class="title-ellipsis">北京热带雨林风情园温泉酒店+私汤泡池</p>
          </h2>
          <h5 class="header-price">
            <span class="now-price">&yen;<em class="now-price-number">458</em></span>
            <span class="now-price-text">起/份</span>
            <span class="market-price">票面价:&yen;<em class="market-price-number">1580</em></span>
          </h5>
          <div class="iconfont close-icon"
               @click="handleCloseBtnClick">&#xe621;
          </div>
    		</div>
    		<date-choose :date="categoryList[0]"></date-choose>
    		<room-choose :room="categoryList[1]"></room-choose>
    		<sight-tour-date :tourdate="categoryList[2]"></sight-tour-date>
        <router-link to="/sighthotel/order">
    		  <a class="booking-footer" href="javascript:;">立即预订</a>
        </router-link>
      </div>
  </transition>
</template>

<script>

import datechoose from './datechoose'
import roomchoose from './roomchoose'
import sighttourdate from './sighttourdate'

export default {
    created:function() {
      this.$http.get('/static/selectCategory.json').then(response => {
          this.categoryList = response.body.data.categoryList;
      },response => {
        console.log("get index data error")
      })
    },
    data() {
      return {
        categoryList:[{},{},{}]
      }
    },
    methods: {
      handleCloseBtnClick() {
        this.$emit("bookclose")
      }
    },
    components:{
    	"date-choose":datechoose,
    	"room-choose":roomchoose,
    	"sight-tour-date":sighttourdate
    },
    props:["show"]
}

</script>


<style scoped>
  	.booking-main {
  		position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      width: 100%;
      height: 454.4px;
      background: #fff;
  	}
    .booking-header {
      padding: 0 .2rem;
    }
    .header-title {
      margin-right: .6rem;
      padding: .3rem 0 .1rem 0;
      font-size: .34rem;
      line-height: .4rem;
    }
    .title-ellipsis{
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .header-price {
      font-size: .24rem;
      line-height: .48rem;
      color: #9e9e9e;
    }
    .now-price {
      margin-right: .06rem;
      font-size: .24rem;
      color: #ff8300;
    }
    .now-price-number {
      margin-left: .06rem;
      font-size: .36rem;
    }
    .market-price {
      text-decoration: line-through;
    }
    .close-icon {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: .88rem;
      height: 1rem;
      color: #9e9e9e;
      font-size: .4rem;
      line-height: 1rem;
      text-align: center;
    }
    .booking-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      width: 100%;
      display: block;
      background: #ff9800;
      color: #fff;
      font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    }

    .v-leave-active, .v-enter-active {
      transition: all .6s ease;
    }
    
    .v-enter, .v-leave-to {
      bottom: -454.4px;
    }

</style>

