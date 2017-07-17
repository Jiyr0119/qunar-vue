<template>
    <div class="swiper-box" >
        <div class="slide-closebutton iconfont" @click="handleCloseMaskClick" >&#xe621;</div>
        <swiper class="topimg-data" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-imgbox" v-for="(item,index) in propsimglist" :key="'imgswiper' + index">
                <img class="swiper-img" :src="item" />
            </swiper-slide>
        </swiper>
        <div class="bottom-optionbox">
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev iconfont" slot="button-prev">&#xe657;</div>
            <div class="swiper-button-next iconfont" slot="button-next">&#xe63a;</div> 
        </div>
    </div>
</template>

<script>    

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data () {
            return {
                notNextTick: true,
                direction: 'horizontal',
                swiperOption: {
                    autoplay: false,
                    autoHeight: true,
                    initialSlide: this.imgindex,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    paginationType: 'fraction'
                }
            }
        },
        props: ["propsimglist","imgindex"],
        methods: {
            handleCloseMaskClick: function() {
                this.$emit("closeimgbox")
            }
        }
    }

</script>

<style scoped>
    .swiper-box {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background: #000;
        z-index: 199;
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
        top: 1.2rem;
        left: 0;
        bottom: 1.66rem;
        width: 100%;
        height: 0;
        padding-bottom: 130%;
        overflow: hidden;
        margin: auto;
    }
    .swiper-imgbox {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .swiper-img {
        width: 100%;
    }
    .swiper-pagination {
        color: #eee;
        font-size: .32rem;
    }   
    .bottom-optionbox {
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: .8rem;
    }
   .swiper-button-prev,
   .swiper-button-next {       
        width: .8rem;
        height: .8rem;
        font-size: .6rem;
        background: rgba(51,51,51,.8);
        border-radius: 50%; 
        line-height: .8rem; 
        color: #eee;
   }
</style> 
