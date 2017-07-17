<template>
    <div class="prddetail-contain">
        <h3 class="prddetail-title"><span class="title-leftline"></span>{{moreQuotation.prddetailTitle}}</h3>
        <div class="product-contain border-top">
            <div class="prddetail-content" v-for="(list, index) in moreQuotation.lists" :key="index + 'content_'" :class="{'border-bottom' :index == 0}">
                <router-link to="/onedaytour/detail">
                    <div class="productlist-item">
                        <h3 class="productprices-name">{{list.productpricesName}}</h3>
                        <p class="productprices-supplier"><span class="supplier-qunar" v-show="list.supplierqunarShow"></span>{{list.productpricesSupplier}}</p>
                        <div class="producttag-content">
                            <p class="producttag-item border" v-show="list.producttagShow" v-html="list.producttagItem"></p>
                        </div>
                        <div class="product-tag">
                            <p class="product-tag-item" v-for="item in list.productTag"> <span class="iconfont desctag" v-html="item.icon"></span>{{item.productDesctag}}
                            </p>
                        </div>
                    </div>
                    <div class="productprices-details">
                        <i class="price">&yen;</i><span class="price-num">{{list.productpricesDetails.priceNum}}</span>
                        <span class="iconfont product-arrow" v-html="list.productpricesDetails.icon"></span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="price-bottom"></div>
    </div>

</template>

<script>
    export default {

        props: ["moreQuotation"]

    }

</script>


<style scoped>
    .prddetail-contain {
        background: #ffffff;
        font-size: 0;
    }

    .prddetail-title {
        height: .84rem;
        padding-left: .24rem;
        line-height: .84rem;
        font-size: .32rem;
        color: #212121;
    }

    .title-leftline {
        float: left;
        display: block;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        margin: .3rem .12rem 0 0;
    }

    .product-contain {
        padding: 0 .24rem;
    }

    .product-contain::before {
        border-color: #f0f0f0;
    }

    .prddetail-content {
        position: relative;
        padding: .26rem 0 .28rem;
        overflow: hidden;
    }

    .prddetail-content::before {
        border-color: #f0f0f0;
    }

    .productlist-item {
        float: left;
        width: 5.4rem;
    }

    .productprices-name {
        font-size: .28rem;
        color: #212121;
        line-height: .4rem;
    }

    .productprices-supplier {
        font-size: .28rem;
        color: #9e9e9e;
        height: .28rem;
        line-height: .28rem;
        margin: .1rem 0;
    }

    .supplier-qunar {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        vertical-align: -.06rem;
        margin-right: .06rem;
        background: url(data:image/png;base64,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) 0 0 no-repeat;
        background-size: 100% 100%;
    }

    .producttag-item {
        width: .94rem;
        height: .28rem;
        font-size: .24rem;
        color: #ff124f;
        text-align: center;
        line-height: .28rem;
        margin-bottom: .1rem;
    }

    .producttag-item::before {
        border-color: #ff1200;
    }

    .desctag {
        font-size: .2rem;
        color: #77cddd;
        margin-right: .1rem;
    }

    .product-tag {
        overflow: hidden;
    }

    .product-tag-item {
        float: left;
        font-size: .24rem;
        color: #616161;
        margin-right: .32rem;
    }

    .productprices-details {
        position: absolute;
        top: 50%;
        right: .1rem;
        height: .32rem;
        line-height: .32rem;
        margin-top: -.16rem;
    }

    .price {
        font-size: .18rem;
        color: #ff8300;
    }

    .price-num {
        font-size: .32rem;
        color: #ff8300;
        margin-left: .08rem;
    }

    .product-arrow {
        font-size: .28rem;
        color: #9e9ead;
        margin-left: .08rem;
    }

    .price-bottom {
        height: 1.2rem;
        background: #f5f5f5;
    }
</style>