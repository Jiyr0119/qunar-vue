<template>
    <div class="expense-main">
        <h3 class="prddetail-title border-bottom">{{expenseExplanationInfo.title}}</h3>
        <div class="prddetail-content">
            <div v-for="(item, index) in expenseExplanationInfo.content.expense" :key="index + 'expense'">
                <h4 class="prddetail-subtitle">{{item.title}}</h4>
                <ul class="border structure-list">
                    <li class="structure-item border-top" v-for="(itemInner, index) in item.list" :key="index + 'list'">
                        <h4 class="structure-title border-right">{{itemInner.title}}</h4>
                        <p class="structure-desc">{{itemInner.content}}</p>
                    </li>
                </ul>
            </div>
            <h4 class="prddetail-subtitle">{{expenseExplanationInfo.content.last.title}}</h4>
            <p class="prddetail-desc" v-html="expenseExplanationInfo.content.last.content"></p>
        </div> 
    </div>
</template>

<script>
    export default {

        data() {
            return {
                expenseElementOffsetTop: 0,
                "title": "费用及退款说明"
            }
        },

        props: [
            "expenseExplanationInfo"
        ],

        mounted() {
            var expenseElement = document.querySelectorAll('.expense-main');
            this.expenseElementOffsetTop = expenseElement[0].offsetTop;
        }
    }

</script>


<style scoped>
    .expense-main {
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
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }

    .structure-item {
        overflow: hidden;
        position: relative;
        color: #212121;
        background: #f5f5f5;
        font-size: .28rem;
        line-height: .4rem;
    }

    .structure-title {
        position: absolute;
        top: 50%;
        padding: .2rem 0;
        width: 1.8rem;
        text-align: center;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .border:before {
        z-index: 1;
    }

    .structure-desc {
        margin-left: 1.8rem;
        padding: .2rem;
        background: #fff;
        color: #616161;
    }

    .prddetail-desc {
        padding-bottom: .2rem;
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
    }
</style>