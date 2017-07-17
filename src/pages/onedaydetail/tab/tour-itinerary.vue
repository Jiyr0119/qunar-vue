<template>
    <div class="tour-intimerary-main">
        <div class="routesum-outter">
            <div class="routesum-inner">
                <h5 v-for="(item, index) in tourItineraryInfo.routesum" :class="{'routesum-item':index==0}" :key="index + 'routesum'">
                    <span class="iconfont" v-html="item.icon"></span>
                    <span>{{item.item}}</span> {{item.info}}
                </h5>
            </div>
        </div>
        <div>
            <h1 class="summary-title">行程亮点</h1>
            <div class="card-conten">
                <ul class="card-content">
                    <li v-for="(item, index) in tourItineraryInfo.cardContent" class="card-content-item" :key="index + 'cardContent'"><span>★</span>{{item.content}}</li>
                </ul>
            </div>
        </div>
        <div class="prddetail-group">
            <h1 class="route-headtext">行程安排</h1>
            <ul class="timeline">
                <li class="prddetail-routeitem" v-for="item in tourItineraryInfo.timeLine">
                    <span class="prddetail-date">{{item.time}}</span>
                    <div class="prddetail-route">
                        <span class="iconfont timeline-nodeicon" v-html="item.icon"></span>
                        <a href="#" v-if="item.url">{{item.title}}</a>
                        <span v-else class="route-title">{{item.title}}</span>
                        <p class="route-desc">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <router-link to="/">
            <div class="card-moreoutter">
                <div class="card-more border-bottom">查看详细产品介绍
                    <span class="iconfont">&#xe768;</span>
                </div>
            </div>
        </router-link>
        <div class='prddetail-mapcon'>
            <baidu-map class="map" :center="tourItineraryInfo.map.center" :zoom="tourItineraryInfo.map.zoom" @click="handleMapClick">
                <bm-marker :position="tourItineraryInfo.map.center" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                </bm-marker>
            </baidu-map>
        </div>
        <div class="page-map" v-if="isBigMapOpen">
            <baidu-map class="map" :center="tourItineraryInfo.map.center" :zoom="tourItineraryInfo.map.zoom" @click="handleMapClick">
                <bm-marker :position="tourItineraryInfo.map.center" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                </bm-marker>
            </baidu-map>
        </div>
    </div>
</template>

<script>
    export default {

        props: [
            "tourItineraryInfo", "isBigMapOpen"
        ],

        methods: {

            handleMapClick: function () {
                if (!this.isBigMapOpen) {
                    this.$emit("openMap");
                }
            }

        }

    }

</script>


<style scoped>
    .map {
        width: 100%;
        height: 100%;
    }

    .tour-intimerary-main {
        padding: .98rem .2rem .1rem;
        background: #fff;
    }

    .routesum-outter {
        padding: .24rem 0;
    }

    .routesum-inner {
        background: #f5f5f5;
        border-radius: .1rem;
        padding: .2rem;
    }

    .routesum-item {
        margin-bottom: .2rem;
    }

    .summary-title {
        color: #616161;
        font-size: .4rem;
    }

    .card-conten {
        padding: .24rem 0;
        border-bottom: 1px dashed #dadada;
    }

    .card-content-item {
        color: #212121;
        font-size: .28rem;
        line-height: .44rem;
        max-height: 1.32rem;
        overflow: hidden;
    }

    .prddetail-group {
        padding: .01rem 0;
        background-color: #fff;
    }

    .prddetail-routeitem {
        padding-bottom: .14rem;
    }

    .route-headtext {
        color: #616161;
        font-size: .4rem;
        margin-top: .3rem;
    }

    .prddetail-routeitem {
        padding-bottom: .14rem;
    }

    .timeline {
        padding: .2rem 0;
        overflow: hidden;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-routeitem {
        overflow: hidden;
        min-height: 1%;
        padding-bottom: .14rem;
    }

    .prddetail-date {
        overflow: hidden;
        float: left;
        width: .72rem;
        height: .44rem;
        white-space: nowrap;
        color: #212121;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-route {
        position: relative;
        margin-left: .76rem;
        padding-left: .7rem;
        font-size: .28rem;
        padding-bottom: .1rem;
        color: #616161;
        line-height: .4rem;
    }

    .prddetail-route::befor {
        content: '';
        position: absolute;
        z-index: 2;
        top: 4px;
        left: .28rem;
        width: 8px;
        height: 12px;
        border-radius: 4px;
        background-color: #fff;
    }

    .timeline-nodeicon {
        position: absolute;
        z-index: 2;
        top: 2px;
        left: .2rem;
        color: #00afc7;
        font-size: .28rem;
    }

    .route-desc {
        color: #616161;
        font-size: .28rem;
    }

    .route-title {
        color: #212121;
    }

    .prddetail-route::after {
        content: '';
        position: absolute;
        bottom: -.4rem;
        left: .04rem;
        width: 1px;
        height: 100%;
        margin-left: .3rem;
        border-radius: 3px;
        background-color: rgba(217, 217, 217, 0.7);
    }

    .card-moreoutter {
        padding: 0 .2rem;
    }

    .card-more {
        height: .8rem;
        color: #616161;
        font-size: .28rem;
        line-height: .8rem;
        text-align: center;
        margin-top: .1rem;
        border-top: 1px dashed #dadada;
    }

    .prddetail-mapcon {
        position: relative;
        height: 3.5rem;
        padding-top: .2rem;
        overflow: hidden;
        margin-bottom: .2rem;
    }

    .page-map {
        position: fixed;
        left: 0;
        right: 0;
        top: .88rem;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding-top: 0;
        z-index: 2000;
    }
</style>