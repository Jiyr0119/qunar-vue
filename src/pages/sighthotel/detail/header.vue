<template>
    <div>
        <header class="header-box">
            <div class="detail-header" style="display: block; opacity: 1;">
                <a class="header-left iconfont" href="javascript:window.history.back();">&#xe685;</a>
                <h1 class="header-title">{{productInfodata.ticketName}}</h1>
            </div>
            <div class="topimg-box">
                <img class="topimg-img" @click="handleShowMaskClick" :src="productInfodata.imgUrl" :alt="productInfodata.ticketName"/>
                <div class="topimg-info">
                    <span class="iconfont tu-iconfont">&#xe61e;</span>
                    <span>1</span>
                    <span>/</span>
                    <span>{{imgswiperInfodata.length}}</span>
                </div>
            </div>
            <div class="swiper-box" v-show="seen">
                <div class="slide-closebutton iconfont" @click="handleCloseMaskClick">&#xe621;</div>
                <swiper class="topimg-data" :options="swiperOption" ref="mySwiper" >
                    <swiper-slide class="swiper-imgbox" v-for="(item,index) in imgswiperInfodata" :key="'imgswiperInfodata' + index">
                        <img class="swiper-img" :src="item.imgUrl" alt="itemimgAtl"/>
                    </swiper-slide>
                </swiper>
                <div class="page-btn">
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev iconfont" slot="button-prev">&#xe657;</div>
                    <div class="swiper-button-next iconfont" slot="button-next">&#xe63a;</div>    
                </div>
            </div>
        </header>
        <div class="prdcard-con border-bottom">
            <div class="prdcard-infocon mp-prdcard-infocon-touch">
                <h2 class="prdcard-name">{{productInfodata.ticketName}}</h2>
            </div>
            <div class="prdcard-pricecon">
                <span class="prdcard-priceicon">¥</span>
                <span class="prdcard-pricetext">{{productInfodata.lowerPrice}}</span>
                <span class="prdcard-priceunit">起/份</span>
            </div>
        </div>   
    </div>
        
</template>

<script>



export default {
    data () {
        return {
            swiperOption: {
                notNextTick: true,
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                paginationType: 'fraction'
            },
            seen: false,
        }
    },
    props: ["productInfodata","imgswiperInfodata"],
    methods: {
        handleShowMaskClick: function() {
            this.seen = true
        },
        handleCloseMaskClick :function() {
            this.seen = false
        }
    }
}
</script>


<style scoped>
    .header-box {
        position: relative;
        width: 100%;
        height: 3.6rem;
        background: #ccc;
        text-align: center;
        color: #fff;
    }
    .detail-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        line-height: .88rem;
        z-index: 2;
        background: #00bcd4;
        font-size: .28rem;
    }
    .header-left {
        display: block;
        width: .88rem;
        height: .88rem;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        color: #fff;
        font-size: .36rem;
    }
    .header-title {
        line-height: .88rem;
        overflow: hidden;
        margin: 0 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
    }
    .return{
        position: absolute;
        z-index: 10;
        left: .2rem;
        top: 0;
        transform: rotateZ(45deg);
        width: .24rem;
        height: .24rem;
        border-left: .04rem solid #fff;
        border-bottom: .04rem solid #fff;
        margin: .3rem .1rem;
    }
    .topimg-box {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
    }
    .topimg-img {
        width: 100%;
    }
    .tu-iconfont {
        font-size: .2rem;
    }
    .topimg-info {
        overflow: hidden;
        position: absolute;
        right: .2rem;
        bottom: .3rem;
        min-width: 1rem;
        height: .4rem;
        padding: 0 .15rem;
        background: rgba(0,0,0, .3);
        color: #fff;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
        border-radius: .2rem;
    }
   .swiper-box {
        display: block;
        position: fixed;
        z-index: 99;
        top: 0;
        bottom: 0;
        background: #000;
        width: 100%;
    }
     .slide-closebutton {
        position: absolute;
        top: .6rem;
        right: .4rem;
        width: .6rem;
        height: .6rem;
        color: #fff;
        font-size: .6rem;
    }
    .topimg-data {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: auto;
    }
    .swiper-imgbox {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
    }
    .swiper-img {
        width: 100%;
    }
    .page-btn {
        width: 100%;
        position: fixed;
        height: .88rem;
        width: 100%;
        left: 0;
        bottom: .8rem;
    }
    .swiper-button-prev, .swiper-button-next {
        width: .8rem;
        height: .8rem;
        font-size: .6rem;
        background: rgba(51,51,51,.8);
        border-radius: 50%; 
        line-height: .8rem;  
   }
    .prdcard-con {
        position: relative;
        margin-top: -.1rem;
        padding: .3rem .2rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }
    .prdcard-con::before {
        border-color: #dadada;
    }
    .prdcard-infocon {
        font-size: .32rem;
        color: #212121;
        line-height: .38rem;
    }
    .prdcard-pricecon {
        overflow: hidden;
        height: .7rem;
    }
    .prdcard-priceicon {
        display: block;
        float: left;
        position: relative;
        top: .26rem;
        color: #ff8300;
        font-size: .4rem;
        transform: scale(.5);
    }
    .prdcard-pricetext {
        display: block;
        float: left;
        position: relative;
        top: .16rem;
        color: #ff8300;
        font-size: .48rem;
    }
    .prdcard-priceunit {
        display: block;
        float: left;
        position: relative;
        top: .3rem;
        left: .06rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
</style>
