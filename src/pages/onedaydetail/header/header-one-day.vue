<template>
    <div>
        <div class="main" id="main">
            <div class="imgavatar">
                <img class="imgavatar-img" :src="JiHeader.imgavatarImg" :alt="JiHeader.headerTitle">
                <div class="imgavatar-mask"></div>
                <div class="imgavatar-infocon">
                    <span class="imgavatar-left">{{JiHeader.imgavatarLeft}}</span>
                    <span class="imgavatar-right">{{JiHeader.imgavatarRight}}</span>
                </div>
            </div>
        </div>
        <span class="header-back">
            <span class="headerback-bg"></span>
            <span class="iconfont headerback-iconone" v-html="JiHeader.headerLeft"></span>
        </span>
    </div>

</template>

<script>
    export default {

        props: ["JiHeader"]

    }
</script>


<style scoped>
    .imgavatar {
        overflow: hidden;
        position: relative;
        height: 4rem;
    }
    
    .imgavatar-img {
        width: 100%;
        min-height: 4rem;
        vertical-align: middle;
    }
    
    .imgavatar-mask {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .93rem;
        color: #fff;
    }
    
    .imgavatar-infocon {
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 0;
    }
    
    .imgavatar-left {
        margin-left: .2rem;
    }
    
    .imgavatar-right {
        margin-right: .2rem;
        float: right;
    }
    
    .imgavatar-left,
    .imgavatar-right {
        overflow: hidden;
        display: inline-block;
        height: .34rem;
        margin-bottom: .22rem;
        color: #fff;
        font-size: .24rem;
        line-height: .34rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .header-back {
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem;
        line-height: .72rem;
        position: absolute;
        font-size: .36rem;
        color: #fff;
        text-align: center;
    }
    
    .headerback-iconone {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: .72rem;
        line-height: .72rem;
        text-align: left;
        text-indent: .24rem;
    }
    
    .headerback-bg {
        display: block;
        width: .72rem;
        height: .72rem;
        background-color: #000;
        opacity: .5;
        border-radius: .36rem;
    }
    
    .headerback-icon {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: .72rem;
        line-height: .72rem;
        text-align: left;
        text-indent: .24rem;
    }
</style>