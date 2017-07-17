<template>
    <div class="room-choose border-top">
      <h2 class="note">{{room.title}}</h2>
      <ul class="room-list">
        <li class="room-item" v-for="(item,index) in room.value" :key="item.key">
          <div class="room-img-wrap">
            <img class="room-img" :src="item.bigImgUrl">
          </div>
          <div class="room-info">
            <div class="room-title">{{item.displayName}}</div>
            <div class="room-desc">{{item.desc}}</div>
            <div class="room-chooseicon"
                 :class="{'room-chooseicon-checked':checked[index]}"
                 @click="handleClick(index)">
            </div>
          </div>
          <div style="clear:both"></div>
        </li>
        
      </ul>
    </div>
</template>

<script>

export default {
    props:["room"], 
    data() {
      return {
        title:"",
        checked:[false,false]
      }
    },
    methods:{
      handleClick:function(index) {
        this.checked.splice(0,2,false,false);
        this.checked.splice(index,1,true);
      }
    }
}


</script>


<style scoped>
  .room-choose {
    margin: .3rem .2rem 0;
    position: relative;
  }
  .room-choose.border-top::before {
    border: .02rem dashed #ccc;
  }
  .note {
    padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
  }
  .room-item {
    height: 1.2rem;
  }
  .room-img-wrap {
    float: left;
    padding-right: .2rem;
    width: 1rem;
    height: 1rem;
  }
  .room-img {
    width: 1rem;
    height: 1rem;
  }
  .room-info {
    float: left;
    height: 1rem;
    width: 4.8rem;
    position: relative;
  }
  .room-title {
    font-size: .32rem;
    color: #22222d;
    margin-bottom: .2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: .9rem;
  }
  .room-desc {
    color: #88888d;
    font-size: .24rem;
    line-height: .4rem;
    max-height: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: .1rem;
  }
  .room-chooseicon {
    position: absolute;
    right: .2rem;
    top: .2rem;
    width: .31rem;
    height: .24rem;
    border: .02rem solid #ccc;
  }

  .room-chooseicon-checked {
    background-image: url(//simg3.qunarzz.com/piao/images/touch/checkbox_l.png);
    background-size: .31rem .24rem;
  }
</style>



