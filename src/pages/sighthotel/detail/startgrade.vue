<template>
    <div class="start-grade border-topbottom">
        <div class="prddetail-comments ">
            <a href="//touch.piao.qunar.com/touch/weekend/comment.htm?spuId=283057" class="linkarea"></a>
            <div class="comments-total">
                <span class="starlevel">
                    <span class="starlevel-gain" data-score="4.7" style="width:94%">★★★★★</span>
                </span>
                <span class="comments-totalnum">185评论</span>
                <span class="comments-arrow"></span>
            </div>
        </div>
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
    .start-grade {
        position: relative;
        height: .9rem;
        padding: 0 .2rem;
        margin-top: .2rem;
        background: #fff;
    }
    .start-grade::before {
        border-color: #dadada;
    }
    .start-grade::after {
        border-color: #dadada;
    }
    .linkarea {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .comments-total {
        line-height: .9rem;
        color: #212121;
        font-size: .28rem;
    }
    .starlevel {
        color: #00bcd4;
    }
    .comments-totalnum {
        padding-left: .1rem;
        color: #9e9e9e;
        font-size: .28rem;
    }
    .comments-arrow {
        position: absolute;
        z-index: 1;
        right: .2rem;
        top: 0;
        transform: rotateZ(-135deg);
        width: .2rem;
        height: .2rem;
        border-left: .02rem solid #9e9e9e;
        border-bottom: .02rem solid #9e9e9e;
        margin: .3rem .1rem;
    }
</style>
