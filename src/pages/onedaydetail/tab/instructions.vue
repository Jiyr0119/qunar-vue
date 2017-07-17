<template>
    <div class="instructions-main">
        <h3 class="prddetail-title border-bottom">{{instructionsInfo.title}}</h3>
        <ul :class='{"prddetail-content": true, "prddetail-content-more":hasMore}'>
            <li class="prddetail-content-item" v-for="item in instructionsInfo.list">
                <h4 class="prddetail-subtitle">{{item.title}}</h4>
                <p class="prddetail-desc">{{item.content}}</p>
            </li>
        </ul>
        <div :class='{"prddetail-more":true,"hasmore": hasMore}' @click="handlePrddetailMore">
            <span>{{button.content}}</span>
            <span class="iconfont" v-html="button.icon"></span>
        </div>
    </div>
    
</template>

<script>
    export default {

        data() {
            return {
                "hasMore": true,
                "button": {
                    "content": "更多使用说明",
                    "icon": "&#xe64b;"
                }
            }
        },

        props: [
            "instructionsInfo"
        ],

        methods: {

            handlePrddetailMore: function () {
                if (this.hasMore) {
                    this.hasMore = false;
                    this.button = {
                        content: "收起使用说明",
                        icon: "&#xe667;"
                    };
                } else {
                    this.hasMore = true;
                    this.button = {
                        content: "更多使用说明",
                        icon: "&#xe64b;"
                    };
                }
            }

        }
    }

</script>


<style scoped>
    .instructions-main {
        margin-top: .2rem;
        padding: .01rem 0;
        background-color: #fff;
    }

    .prddetail-title {
        overflow: hidden;
        position: relative;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }

    .prddetail-title::after {
        content: "\0020";
        position: absolute;
        top: .28rem;
        left: .2rem;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        -webkit-border-radius: .06rem;
        -moz-border-radius: .06rem;
        border-radius: .06rem;
    }

    .prddetail-content {
        overflow: hidden;
        padding: 0 .24rem .2rem .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-content-more {
        height: 4.84rem;
    }

    .prddetail-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }

    .prddetail-desc {
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
    }

    .prddetail-more {
        position: relative;
        padding: .24rem 0 .3rem;
        height: .4rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
    }

    .hasmore::before {
        content: '';
        position: absolute;
        left: 0;
        top: -.6rem;
        width: 100%;
        height: .6rem;
        background-image: -webkit-gradient(linear, top, bottom, from(rgba(255, 255, 255, 1)), to(rgba(255, 255, 255, .2)));
        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background-image: -o-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
    }
</style>