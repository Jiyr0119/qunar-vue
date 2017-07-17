<template>
    <div class="choose-date border-top">
      <div class="note">{{date.title}}</div>
        <div class="datecard">
          <span class="datecard-item border"
                v-for="(item,index) in date.value"
                :key="item.key"
                :style="index==3 && lastItemStyle"
                :class="{'datecard-item-active':index===bgchangenum}"
                @click="handleDateClick(index)">
            <em class="datecard-name"
                :style="index==3 && lastNameStyle">{{item.displayName}}</em>
            <b class="datecard-detail">{{index==3 ? '' : item.valueProperties.displayDate}}</b>
          </span>
        </div>
        <otherdate :dateshow="otherdateshow" @close="handleCloseDate"></otherdate>
    </div>
</template>

<script>

import otherdate from './otherdate'

export default {
    props:["date"],
    data() {
      return {
        lastItemStyle:{
          "margin-right":0
        },
        lastNameStyle:{
          "line-height":".86rem",
          "padding-top":0
        },
        bgchangenum:"" ,
        otherdateshow:false
      }
    },
    methods:{
      handleDateClick:function(index) {
        if(index != 3) {
          this.bgchangenum = index
        }else {
          this.otherdateshow = true;
        }
      },
      handleCloseDate:function() {
        this.otherdateshow = false;
      }
    },
    components:{
      otherdate:otherdate
    }
}


</script>


<style scoped>
    .choose-date {
      margin: .18rem .2rem 0 .2rem;
      position: relative;
    }
    .choose-date.border-top::before {
      border: .02rem dashed #ccc;
    }
    .note {
      padding-top: .1rem;
      line-height: .66rem;
      color: #333;
      font-size: .26rem;
    }
    .datecard {
      display: flex;
    }
    .datecard-item {
      flex:1;
      display: inline-block;
      height: .86rem;
      text-align: center;
      margin-right: .16rem;
    }
    .datecard-name {
      display: block;
      padding-top: .08rem;
      height: .36rem;
      line-height: .36rem;
      font-size:.28rem;
    }
    .datecard-detail {
      display: block;
      height: .32rem;
      line-height: .32rem;
      font-size: .24rem;
      color: #888;
    }
    .border::before {
      border-radius: .3rem;
      border:.02rem solid #bdbdbd;
    }

    .datecard-item-active {
      background:#00bcd4;
    }
    .datecard-item-active>.datecard-name,.datecard-item-active>.datecard-detail {
      color:#fff;
    }
    .datecard-item-active::before {
      border-color: #00bcd4;
    }
    .datecard-item-active::after {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 11;
      content: "\e61b";
      font-family: "iconfont";
      font-size: .24rem;
      display: block;
      width: 0;
      height: 0;
      background: none;
      border:.24rem solid transparent; 
      border-bottom-color:#fff;
      border-right-color:#fff;
      color: #00bcd4;
    }
    
</style>



