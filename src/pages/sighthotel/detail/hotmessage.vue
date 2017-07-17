<template>
    <div>
        <div class="prddetail-group border-topbottom">
            <h3 class="prddetail-title border-bottom">酒店介绍</h3>
            <div class="prddetail-content">
                <div class="prddetail-pricesubtitle">
                    <div class="prddetail-subtitle-name prddetail-subtitle-namelong">北京热带雨林风情园温泉酒店</div>
                    <a href="//touch.qunar.com/h5/hotel/hoteldetail?bd_source=menpiaotc&amp;seq=beijing_city_19164" class="linkarea"></a>
                </div>
                <p class="prddetail-desc">地址：北京市昌平区小汤山农业科技示范园</p>
            </div>
            <div class="prddetail-entercon">
                <a href="//touch.qunar.com/h5/hotel/hoteldetail?bd_source=menpiaotc&amp;seq=beijing_city_19164" class="linkarea"></a>
                <h4 class="prddetail-more">查看更多酒店介绍<span class="go-arrow">&gt;</span></h4>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>


<style scoped>
    .prddetail-group {
        margin-top: .2rem;
        background-color: #fff; 
    }
    .prddetail-group::before {
        border-color: #dadada;
    }
    .prddetail-group::after {
        border-color: #dadada;
    }
    .prddetail-title {
        overflow: hidden;
        position: relative;
        height: .9rem;
        font-size: .3rem;
        line-height: .9rem;
        text-indent: .38rem;
    }
    .prddetail-content {
        margin-bottom: .2rem;
        padding: .1rem .2rem 0 .2rem;
        color: #9e9e9e;
        font-size: .28rem;
        line-height: .48rem;
    }
    .prddetail-pricesubtitle {
        overflow: hidden;
        position: relative;
        margin: .14rem 0;
        line-height: .54rem;
    }
    .prddetail-subtitle-name {
        color: #212121;
    }
    .prddetail-entercon {
        position: relative;
        margin: 0 auto;
        height: .9rem;
        line-height:  .9rem;
        font-size: .28rem;
        text-align: center;
    }
    .prddetail-more{
        position: relative;
        margin: 0 auto;
        height: .9rem;
        font-size: .28rem;
        line-height: .9rem;
        text-align: center;
    }
    .go-arrow {
        padding-left: .08rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
</style>
