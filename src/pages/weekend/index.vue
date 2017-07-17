<template>
  	<div class="main" >
    		<weekend-header></weekend-header>

    		<div class="product" >
    	  		<div class="product-item" v-for="(list,index) in productInfo" :key="index+'product'" v-model="index"  @click="getModel(index)">
    	  			    <div class="product-wrapper" v-on:click="show = !show">
                      <img class="product-img"  v-lazy="list.imgUrl"  />
        	  			</div>
        	  			
                  <div class="product-info">
          	  				<h2 class="product-name">{{list.title}}</h2>
          	  				<p class="product-detail">{{list.content}}</p>
        	  			</div>
             </div>
    	  </div>

        <weekend-model :models="modelInfo" v-if="show" :showInfo="show" v-on:listenToShowStatus="getShowStatus"></weekend-model>

  	</div>
</template>

<script>
  import header from './header'
  import model from './model'
export default {
  created:function () {
     	this.$http.get('/static/weekend.json').then(response => {
                this.productInfo = response.body.data[this.$route.params.id];
          }, response => {
                console.log("get index data error");
          });
   },

  data () {
      return {
         show:false,
         index:"",
         productInfo:[],
         modelInfo:{}
      }
    },

  methods: {
        getModel (index) {
          this.modelInfo = this.productInfo[index];
        },
        getShowStatus (status) {
          this.show = status;
        }
    },

  components: {
    	 "weekend-header": header,
       "weekend-model": model
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

  .product-item {
	  	  background: #fff;
	  	  position: relative;
	  	  margin-bottom: .2rem;
  }

  .product-wrapper {
  		  overflow: hidden;
  		  height: 0;
  		  width: 100%;
  		  padding-bottom:43.37288%;
  }

  .product-img {
        width:100%;
  }

  .product-info {
      	padding:.14rem .2rem .24rem .2rem;
      	background-color: #fff;
  }

  .product-name {
    		color: #212121;
    		font-size:.36rem;
    		line-height: .54rem;
  }

  .product-detail {
    		color: #616161;
    		font-size: .26rem;
    		line-height: .45rem;
  }

</style>
