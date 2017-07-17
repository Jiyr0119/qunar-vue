<template>
    <div class="prdcard-con" role="productCardCon">
        <h3 class="prdcard-name">{{JiCardCon.prdcardName}}</h3>
        <div class="prdcard-pricecon">
            <em class="prdcard-priceicon">{{JiCardCon.prdcardPriceicon}}</em>
            <span class="prdcard-pricetext">{{JiCardCon.prdcardPricetext}}</span>
            <span class="prdcard-gray">{{JiCardCon.prdcardGray}}</span>
            <span class="bookingahead-text">{{JiCardCon.bookingAheadText}}</span>
            <span class="prdcard-supplier">{{JiCardCon.prdcardSupplier}}</span>
        </div>

        <div class="prdcard-tagcon">
            <div class="prdcard-tag-item" v-for="(item,index) in JiPrdcardTagItem" :key="index+'tagDesc'">
                <span class="prdcard-tag-icon iconfont" v-html="item.icon"></span>
                <span class="prdcard-tag-desc">{{item.tagDesc}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: ["JiCardCon", "JiPrdcardTagItem"]

    }

</script>


<style scoped>
    .prdcard-con {
        position: relative;
        margin-top: -.1rem;
        padding: .2rem .2rem 0 .2rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }

    .prdcard-name {
        overflow: hidden;
        display: -webkit-box;
        color: #212121;
        font-size: .36rem;
        line-height: .44rem;
        text-overflow: ellipsis;
    }

    .prdcard-pricecon {
        overflow: hidden;
        margin: .16rem 0;
        height: .48rem;
        font-size: 0;
    }

    .prdcard-priceicon {
        color: #ff8300;
        font-size: .24rem;
    }

    .prdcard-pricetext {
        color: #ff8300;
        font-size: .48rem;
    }

    .prdcard-gray {
        color: #9e9e9e;
        font-size: .24rem;
    }

    .bookingahead-text {
        color: #616161;
        font-size: .24rem;
        margin-left: .2rem;
    }

    .prdcard-supplier {
        color: #616161;
        float: right;
        height: .24rem;
        margin-top: .2rem;
        font-size: .24rem;
    }

    .prdcard-tagcon {
        overflow: hidden;
        padding-bottom: .2rem;
        font-size: 0;
    }

    .prdcard-tag-item:not(:last-child) {
        margin-right: .2rem;
    }

    .prdcard-tag-item {
        float: left;
        height: .34rem;
        font-size: .24rem;
        line-height: .34rem;
    }

    .prdcard-tag-icon {
        margin-right: .04rem;
        color: #00afc7;
        font-size: .10rem;
        vertical-align: center;
    }

    .prdcard-tag-desc {
        color: #616161;
    }
</style>