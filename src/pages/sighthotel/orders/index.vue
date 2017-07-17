<template>
    <div class="main">
  		<orders-header @back="handleBack"></orders-header>
        <orders-product></orders-product>
        <orders-buyinformation></orders-buyinformation>
        <orders-information></orders-information>
    </div>
</template>

<script>
import ordersheader from "./header"
import ordersproduct from "./ordersproduct"
import ordersbuyinformation from "./ordersbuyinformation"
import ordersinformation from "./ordersinformation"

export default {
    
    data() {
        return {
          
        }
    },
    methods:{
        handleBack() {
            history.back();
        }
    },
    components: {
    	"orders-header":ordersheader,
        "orders-product":ordersproduct,
        "orders-buyinformation": ordersbuyinformation,
        "orders-information": ordersinformation
    } 
}

</script>

<style scoped>
  	.main {
        position: absolute;
        left: 0;
        top: 0;
        min-height: 100%;
        background: #f5f5f5;
    }
</style>

