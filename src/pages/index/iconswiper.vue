<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(page, index) in pages" :key="index + '_icon_swiper_item'">

                <div class="icon-container" >
                    <div class="icon-wrapper" v-for="item in page">
                      <router-link :to="item.link">
                        <img :src="item.imgUrl" class="icon-img">
                        <p class="icon-title">{{item.title}}</p>
                      </router-link>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
        </swiper>
        <div class="recommend border-topbottom">
            <div class="recomment-item" v-for="(item, index) in recommends" :class="{'border-right': index == 0}" >
                <router-link :to="item.link" class="recomment-item-link">
                {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
            swiperOption: {
                autoplay: false,
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true
            }
        }
    },
    computed: {
        pages: function() {
            var pages = [];
            for (var i = 0; i < this.icons.length; i++) {
                var page = Math.floor(i / 8);
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(this.icons[i]);
            }
            return pages;
        }
    },
    props: ["icons","recommends"]
}
</script>


<style scoped>
    .icon-container {
        overflow: hidden;
        padding-bottom: .4rem;
        height: 2.88rem;
        background: #fff;
    }
    .icon-wrapper {
        padding-top: .3rem;
        overflow: hidden;
        width: 25%;
        float: left;
    }
    .icon-img {
        width: .66rem;
        display: block;
        margin: 0 auto;
    }
    .icon-title {
        margin-top: .2rem;
        text-align: center;
        color: #212121;
        font-size: .28rem;
    }
    .icon-pagination {
        bottom: .1rem;
    }
    .recommend {
        display: flex;
        background: #fff;
    }
    .recomment-item {
        flex: 1;
        line-height: 1rem;
        text-align: center;

    }
    .recomment-item-link {
        color: #000;
    }
</style>
