<template>
    <div class="main">
        <index-header></index-header>
        <imgs-swiper :data="swiperInfo"></imgs-swiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendInfo"></icons-swiper>
        <ads></ads>
        <hotrecommend :hotsight="hotRecommendInfo"></hotrecommend>
        <weekend-trip :weekendtripInfo="weekendtripInfo" :footernavInfo="footernavInfo" 
        :equipmenttype="equipmenttype" :navIcon="navIcon"></weekend-trip>
    </div>
</template>

<script>

    import header from './header'
    import imgswiper from './imgswiper'
    import iconswiper from './iconswiper'
    import ads from './ads'
    import detect from '@/utils/detect.js'
    import hotrecommend from './hotrecommend'
    import weekendtrip from './weekendtrip'

    export default {
        created: function() {
            this.$http.get('/static/index.json').then(response => {
                this.swiperInfo = response.body.data.swiperInfo;
                this.iconInfo = response.body.data.iconInfo;
                this.recommendInfo = response.body.data.recommendInfo;
                this.hotRecommendInfo = response.body.data.hotRecommendInfo;
                this.weekendtripInfo = response.body.data.weekendtripInfo;
                this.footernavInfo = response.body.data.footernavInfo;
                this.equipmenttype = response.body.data.equipmenttype;
                this.navIcon =  response.body.data.naviconInfo;
            }, response => {
                console.log("get index data error")
            });
        },
        data () {
            return {
                swiperInfo: [],
                iconInfo: [],
                recommendInfo: [],
                hotRecommendInfo: [],   
                weekendtripInfo: [],
                footernavInfo: [],
                equipmenttype: [],
                navIcon: []
            }
        },
        components: {
            "index-header": header,
            "imgs-swiper": imgswiper,
            "icons-swiper": iconswiper,
            "ads": ads,
            "hotrecommend": hotrecommend,
            "weekend-trip": weekendtrip
        }
    }
</script>

<style scoped>
    .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
    }
</style>
