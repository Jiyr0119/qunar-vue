<template>
    <div class="sighttourdate border-top">
      <div class="note">{{tourdate.title}}</div>
      <div class="tourdate-card">
          <span class="tourdate-text border"
                v-for="(item,index) in tourdate.value"
                :key="item.key"
                :class="{'tourdate-text-active':index===bgchangenum}"
                @click="handleDateClick(index)">
          {{item.displayName}}
          </span>
      </div>
    </div>
</template>

<script>

export default {
    props:["tourdate"],
    data() {
      return {
        bgchangenum:""
      }
    },
    methods:{
      handleDateClick:function(index) {
        this.bgchangenum = index;
      }
    }
}


</script>


<style scoped>
  .sighttourdate {
    margin:0 .2rem;
    padding-bottom: .6rem;
  }
  .sighttourdate.border-top::before {
    border: .02rem dashed #ccc;
  }
  .note {
    padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
  }
  .tourdate-card {
    margin-top: -.15rem;
  }
  .tourdate-text {
    display: inline-block;
    margin-right: .2rem;
    margin-top: .15rem;
    padding: 0 .2rem;
    line-height: .53rem;
    background: #fff;
    font-size: .28rem;
  }
  .border::before {
    border:.02rem solid #c7ced4;
    border-radius: .3rem;
  }

  .tourdate-text-active {
    background:#b2eaf2;
    color: #0089a1;
  }
  .tourdate-text-active::before {
    border-color:#0089a1;
  }
</style>



