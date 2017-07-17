<template>
<div class="main">
    <div class="info-left">
        <div class="info-main">
            <h2 class="info-title">北京热带雨林风情园温泉酒店+欧式私汤小院住宿；小汤山温泉；纯正温泉水；【VIP温馨客房】</h2>
            <ul class="info-taglist">
                <li class="info-tagitem">入住：2017-07-09</li>
                <li class="info-tagitem"><span class="info-leave">离店：2017-07-10</span><span>VIP温馨客房</span></li>
                <li class="info-tagitem"><span class="info-day">共1晚</span><span>游玩日期：2017-07-09</span></li>
            </ul>
        </div>
    </div>

    <div class="info-right">
        <div class="info-note">预订须知</div>
    </div>

</div>
</template>

<script>


export default {
    
    data() {
      return {
      
      }
    }
   
}


</script>


<style scoped>
  	.main {
        position: relative;
        overflow: hidden;
        min-height: 1.1rem; 
        padding: .2rem .2rem .1rem .2rem;       
        background: #fff;
    }
    .info-left {
        margin-right: 1.9rem;
        float: left;
       
        box-sizing: border-box;
    }
    .info-title {
        color: #212121;
        font-size: .32rem;
        font-weight: normal;
        line-height: .44rem;
        margin-bottom: .04rem;
    }
    .info-taglist {
        overflow: hidden;
    }
    .info-tagitem {   
        float: left;    
        line-height: .44rem;
        color: #616161;
        font-size: .24rem; 
        margin-right: .2rem;
    }
    .info-leave {
        margin-right: .2rem;
    }
    .info-day {
        margin-right: .2rem;
    }
    .info-right {
        position: absolute;
        right: .2rem;
        top: .2rem;
        width: 1.8rem;
        text-align: right;
    }
    .info-note {
        margin-top: .5rem;
        line-height: .32rem;
        color: #00bcd4;
        font-size: .28rem;
    }
</style>
