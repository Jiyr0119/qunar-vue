<template>
    <div class="contain">
        <h3 class="comment-title"><span class="title-leftline"></span>{{userComment.title}}</h3>
        <div class="content-contain border-topbottom">
            <div class="content" v-for="(list, index) in userComment.lists" :key="index + 'content_'" :class="{'border-bottom' :index == 0}">
                <div class="content-level">
                    <p class="content-graystar">
                        <span class="iconfont graystar" v-html="iconStar"></span>
                    </p>
                    <div class="contain-star">
                        <p class="content-starlevel">
                            <span class="iconfont star" v-html="iconStar"></span>
                        </p>
                    </div>
                    <p class="content-date">{{list.name}}&nbsp;&nbsp;{{list.date}}</p>
                </div>
                <p class="content-text">{{list.contentText}}</p>
                <div class="contain-imgs">
                    <div class="comment-imgs">
                        <img class="comment-img" v-for="(item, index) in list.commentImg" :src="item.src" :class="{'comment-img-first' : index == 0}"
                        />
                    </div>
                </div>
            </div>
        </div>
         <router-link to="/comment">
            <div class="more-comment">
                {{last.comment}}
                <span class="iconfont commet-arrows" v-html="last.icon"></span>
            </div>
        </router-link>
    </div>    
</template>

<script>
    export default {

        data() {
            return {
                "iconStar": "&#xe604;&#xe604;&#xe604;&#xe604;&#xe604;",
                "last": {
                    "comment": "查看更多评论",
                    "icon": "&#xe768;"
                }
            }
        },

        props: [
            "userComment"
        ]
    }
</script>


<style scoped>
    .contain {
        margin: .2rem 0 .2rem;
        background: #ffffff;
    }
    
    .comment-title {
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
    
    .content-contain {
        padding: 0 .24rem;
    }
    
    .content-contain::before {
        color: #f0f0f0;
    }
    
    .content {
        padding: .22rem 0 .2rem;
    }
    
    .content::before {
        border-bottom: 1px dashed #cccccc;
    }
    
    .content-level {
        position: relative;
        font-size: 0;
        height: .42rem;
    }
    
    .contain-star {
        position: absolute;
        left: 0;
        top: 0;
        width: 1.54rem;
        height: 0.25rem;
        overflow: hidden;
    }
    
    .content-starlevel {
        width: 2rem;
        height: .25rem;
    }
    
    .content-graystar {
        float: left;
    }
    
    .star {
        font-size: .28rem;
        color: #00bcd4;
    }
    
    .graystar {
        font-size: .28rem;
        color: #e0e0e0;
    }
    
    .content-date {
        float: right;
        font-size: .2rem;
        color: #616161;
    }
    
    .content-text {
        font-size: .24rem;
        color: #616161;
        line-height: .4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        margin: .06rem 0 .04rem;
    }
    
    .contain-imgs {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 22.857%;
    }
    
    .comment-imgs {
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
    }
    
    .comment-img {
        margin-left: .2rem;
        width: 1.6rem;
        height: 1.6rem;
    }
    
    .comment-img-first {
        margin-left: 0;
    }
    
    .more-comment {
        text-align: center;
        font-size: .28rem;
        color: #616161;
        height: .78rem;
        line-height: .78rem;
    }
    
    .commet-arrows {
        font-size: .24rem;
        color: #b9a49e;
    }
</style>