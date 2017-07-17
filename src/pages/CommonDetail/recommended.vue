<template>
	<div class="recommend-container">
        <h3 class="recommend-title">看了该景点的人还看了</h3>
        <div class="recommend-list">
            <a href="" role="sightLink">
                <div class="recommend-item" v-for="(item,index) in data" :key="index + 'recommend-item'">
                    <img class="recommend-img" role="lazyLoadImg" data-original-src="" :src="item.recommendImg" />
                    <div class="recommend-info border-bottom">
                        <div class="recommend-sight">{{item.recommendSight}}</div>
                        <div class="recommend-price price">¥
                            <em class="price-num">{{item.priceNum}}</em>
                            <span class="recommend-flag">起</span>
                        </div>
                        <div class="recommend-comment">
                            <span class="lzf-srtarlevle">
                                <i class="iconfont lzf-srtarlevle-gain" data-score="4.44" style="width:100.0%">&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;</i>
                                
                            </span>
                            <span class="recommend-commentnum">{{item.recommendCommentnum}}</span>
                        </div>
                        <div class="recommend-position">
                            <span class="recommend-subposition border-left">{{item.recommendSubposition}}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>

    export default {

        data () {
            return {
             
            }
        },

        props: ["data"]
    }

</script>


<style scoped>

    .recommend-container {
        margin-top: .2rem;
        margin-bottom: .4rem;
    }

    .recommend-title {
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .3rem;
        line-height: .88rem;
        text-indent: .2rem;
    }

    .recommend-list {
        overflow: hidden;
        background: #fff;
    }

    .recommend-img {
        margin: .2rem .2rem 0 .2rem;
        width: 1.62rem;
        height: 1.62rem;
        float: left;
    }

    .recommend-info {
        position: relative;
        padding-top: .2rem;
        margin-left: 2.02rem;
        height: 1.8rem;
    }

    .recommend-sight {
        position: absolute;
        top: .2rem;
        left: 0;
        right: 1.5rem;
        height: .4rem;
        line-height: .4rem;
        font-size: .3rem;
        color: #212121;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .recommend-price {
        position: absolute;
        right: .2rem;
        top: .2rem;
        line-height: .4rem;
        vertical-align: baseline;
        color: #ff9800;
    }

    .price-num {
        font-size: .36rem;
    }

    .recommend-flag {
        color: #9e9e9e;
    }

    .recommend-comment {
        position: absolute;
        top: 1rem;
        left: 0;
    }

    .lzf-srtarlevle {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }

    .lzf-srtarlevle-gain {
        z-index: 2;
        color: #00bcd4;
    }

    .lzf-srtarlevle-total {
        color: #ddd;
    }

    .recommend-commentnum {
        margin-left: .3rem;
        line-height: .28rem;
        font-size: .24rem;
        vertical-align: middle;
        color: #9e9e9e;
    }

    .recommend-position {
        position: absolute;
        bottom: .24rem;
        left: 0;
        color: #9e9e9e;
        font-size: .24rem;
    }

    .recommend-subposition {
        padding: 0 .04rem 0 .1rem;
    }
</style>