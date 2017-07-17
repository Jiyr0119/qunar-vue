<template>
	<transition>
		<div class="otherdate-main" v-show="dateshow">
			<div class="otherdate-header border-bottom">
		    <h2 class="header-title iconfont icon-zuo">选择时间</h2>
		    <div class="iconfont close-icon"
			       @click="handleCloseDate">&#xe621;
		    </div>
		  </div>
		  <div class="otherdate-content">
        <swiper class="calendar-body" :options="swiperOption" ref="mySwiper">
          <div class="swiper-button-prev page-btn iconfont" slot="button-prev">&#xe657;</div>
          <div class="swiper-button-next page-btn iconfont" slot="button-next">&#xe63a;</div>
          <swiper-slide class="calendar-wrap" v-for="(item,index) in dateList" :key="index+'_dateList'" v-if="index < 3">

            <table class="calendar">
              <caption class="calendar-caption">{{item.date}}</caption>
              <thead>
                <tr class="calendar-weekdays">
                  <th class="calendar-day">日</th>
                  <th class="calendar-day">一</th>
                  <th class="calendar-day">二</th>
                  <th class="calendar-day">三</th>
                  <th class="calendar-day">四</th>
                  <th class="calendar-day">五</th>
                  <th class="calendar-day">六</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 6">
                  <td class="calendar-unit" v-for="m in 7">{{m}}</td>
                </tr>
                
              </tbody>
            </table>
          </swiper-slide>

        </swiper>
      </div>
	  </div>
	</transition>
</template>

<script>

export default {

    created:function() {
      this.$http.get('/static/categoryOtherDate.json').then(response => {
          this.dateList = response.body.data.ruleProperties.dateList;
      },response => {
        console.log("get index data error")
      })
    },

	  props:["dateshow"],

    data() {
      return {
  		  dateList:[],
        swiperOption: {
          direction : 'horizontal',
          autoHeight: true,
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
        }
      }
    },

    methods: {
    	handleCloseDate:function() {
    		this.$emit("close")
    	}
    }

}

</script>


<style scoped>
  	.otherdate-main {
  	  position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
      width: 100%;
      height: 454.4px;
      background: #fff;
  	}
  	.otherdate-header {
  	  width: 100%;
  	  height: 1rem;
    }
    .header-title {
  	  line-height: 1rem;
  	  font-size: .34rem;
  	  text-align: center;
  	  color: #212121;
    }
    .icon-zuo::before {
      position:absolute;
      left: 0;
      top: 0;
      width: 0.88rem;
      font-size: .36rem;
      color: #9e9e9e;
    }
    .border-bottom::before {
	    background: #c9cccd;
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
    .otherdate-content {
      width: 100%;
    }
    .calendar-body {
      overflow: auto;
      min-height: 5.4rem;
      max-height: 6.5rem;
      width: 100%;
      background: orange;
      position: relative;
    }
    .page-btn {
      position: absolute;
      z-index: 25;
      top: .44rem;
      width: .88rem;
      height: .92rem;
      color: #bbb;
      font-size: .28rem;
      line-height: .92rem;
      text-align: center;
      background: #fff;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
    .calendar-wrap {
      /*margin: 0 .2rem;*/
      background: #fff;
    }
    .calendar-wrap {
      border-collapse: collapse;
      border-spacing: 0;
      text-align: left;
    }
    .calendar {
      width: 100%;
      table-layout: fixed;
      caption-side: top;
    }
    .calendar-caption {
      color: #212121;
      font-size: .28rem;
      line-height: .92rem;
      text-align: center;
    }
    .calendar-day {
      color: #212121;
      font-size: .24rem;
      line-height: .5rem;
      width: 14.3%;
      text-align: center;
    }
    .calendar-unit {
      height: 1rem;
      vertical-align: top;
      width: 14.3%;
      text-align: center;
    }   

	  .v-leave-active, .v-leave-active {
      transition: all .6s ease;
    }
    .v-enter-to, .v-leave {
      bottom: 0;
    }
    .v-enter, .v-leave-to {
      bottom: -454.4px;
    }
</style>

