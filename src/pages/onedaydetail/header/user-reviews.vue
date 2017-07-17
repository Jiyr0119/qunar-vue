<template>
    <div>
        <router-link to="/comment">
            <div class="commentsinfo-con" style="margin-bottom:0;">
                <span class="commentswell-score">{{userReviews.commentsInfoCon.commentScore}}</span>
                <span class="commentswell-text">{{userReviews.commentsInfoCon.commentText}}</span>
                <span class="comments-tagscore">{{userReviews.commentsInfoCon.commentTag}}</span>
                <span class="comments-totalnum">{{userReviews.commentsInfoCon.commentTotalnum}}
                    <span class="iconfont comments-rightarrow" v-html="userReviews.commentsInfoCon.commentRightArrow"></span>
                </span>
            </div>

            <div class="border-top" style="padding: .1rem .2rem;background-color: #fff;">
                <div class="comments-item">
                    <div class="content-level">
                        <span class="starlevel" style="width:1.5rem;font-size:.2rem;">
                            <strong class="iconfont starlevel-gain" v-html="userReviews.borderTop.starlevelGain" :style="style"></strong>
                            <span class="iconfont starlevel-total" v-html="userReviews.borderTop.starlevelTotal"></span>
                        </span>
                        <span class="comments-date" v-html="userReviews.borderTop.commentsDate"></span>
                    </div>
                    <p class="wellcomments-text ellipsis2">{{userReviews.borderTop.wellcommentsText}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {

        props: ["userReviews"],
        computed: {
            style: function() {
                return {
                    width: this.userReviews.commentsInfoCon.commentScore * 20 + "%"
                }
            }
        }

    }
</script>


<style scoped>
    .commentsinfo-con {
        position: relative;
        margin-top: .2rem;
        background-color: #fff;
        height: .8rem;
        line-height: .8rem;
    }
    
    .commentswell-score {
        font-size: .4rem;
        color: #00afc7;
        margin-left: .2rem;
    }
    
    .commentswell-text {
        color: #00afc7;
    }
    
    .comments-tagscore {
        display: inline-block;
        margin-left: .1rem;
        color: #616161;
    }
    
    .comments-totalnum {
        float: right;
        position: relative;
        top: .25rem;
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    
    .comments-rightarrow {
        font-family: 'mpiconfont';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
    
    .border-top {
        position: relative;
    }
    
    .comments-item:last-child {
        border-bottom: 0;
    }
    
    .comments-item {
        padding: .2rem 0!important;
        padding-top: 0.2rem;
        padding-right: 0px;
        padding-bottom: 0.2rem;
        padding-left: 0px;
    }
    
    .comments-item {
        color: #616161;
        padding: .2rem 0;
        border-bottom: 1px dashed #ccc;
    }
    
    .starlevel {
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }
    
    .starlevel-gain {
        letter-spacing: .06rem;
        z-index: 2;
        color: #00bcd4;
    }
    
    .starlevel-gain,
    .starlevel-total {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .iconfont {
        font-size: .2rem;
    }
    
    .starlevel-total {
        color: #e0e0e0;
        z-index: 1;
        letter-spacing: .06rem;
    }
    
    .comments-date {
        float: right;
        margin-left: .2rem;
        color: #616161;
    }
    
    .wellcomments-text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .wellcomments-text.ellipsis2 {
        line-height: .4rem;
    }
</style>