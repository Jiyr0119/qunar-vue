<template>
    <div class="prddetail-group border-topbottom ">
        <h3 class="prddetail-title border-bottom">景点介绍</h3>
        <div class="prddetail-content">
            <div class="prddetail-pricesubtitle">
                <div class="prddetail-subtitle-name ">北京热带雨林风情园温泉</div>
                <div class="prddetail-subtitle-price border-left">
                    <span class="prddetail-priceicon">¥</span>
                    <span class="prddetail-pricenum">628</span>
                    <span class="prddetail-priceunit">起/张</span>
                </div>
            </div>
            <p class="prddetail-desc">地址：北京市昌平区小汤山国家农业科技示范园东区</p>
            <p class="prddetail-desc mp-ellipsis2">介绍：在这里，您可以不必想那繁重的沧桑与城市的宣泄，只需放松身心，解衣入池，吐浊纳清，借着腾腾热气，舒展开积郁许久的沉闷之气，闲时酌两杯淡淡的清酒，看树叶飘零与雪花点点，想来该是一件何等美妙与畅快之事！</p>
        </div>
        <div class="prddetail-entercon border-top">
            <h4 class="prddetail-more">查看更多景点介绍<span class="go-arrow">></span></h4>
        </div>
        <div>map</div>
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
        background: #fff;
        margin-top: .2rem;
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
        margin: .15rem 0;
        line-height: .54rem;
    } 
    .prddetail-subtitle-name {
        float: left;
        margin-right: 1.9rem;
        color: #212121;
    }
    .prddetail-subtitle-price {
        position: absolute;
        top: 50%;
        right: 0;
        height: .46rem;
        margin-top: -.23rem;
        padding-left: .2rem;
        font-size: 0;
        line-height: .46rem;
        vertical-align: bottom;
    }
    .prddetail-priceicon {
        float: left;
        color: #ff8300;
        font-size: .4rem;
        transform: scale(.5);
    }
    
    .prddetail-pricenum {
        float: left;
        font-size: .36rem;
        color: #ff8300;
    }
    .prddetail-priceunit {
        float: left;
        padding-left: .04rem;
        color: #9e9e9e;
        font-size: .24rem;
        letter-spacing: .04rem;
    }
    .prddetail-entercon {
        position: relative;
        margin: 0 auto;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        font-size: .28rem;
        text-align: center;
    }
    .go-arrow {
        padding-left: .08rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
</style>
