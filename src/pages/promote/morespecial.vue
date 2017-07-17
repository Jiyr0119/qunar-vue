<template>
  	<div class="more-special">
        <div class="top">
            <img src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/caption2.jpg" alt="更多特价享立减" class="top-img">
        </div>
        <div class="filter-outer" ref="ceiling">
            <ul class="nav">
                <li 
                :class="{'nav-box':true, navActive : index == activeIndex }" @click="handleClick(index)" 
                v-for="(items, index) in nav" 
                :key="index+'_nav'"> 
                    <div :class="{'nav-font':true, 'navfont':true, 'activeImg' : index == activeIndex, 'activeImgNext':index-1==activeIndex}">
                        <span :class="{navbgcolor: bgColor}"></span>
                        {{items.navFont}}
                    </div>
                </li>
            </ul>
        </div>
        <div class="more-special-list" ref="scrolllist">            
            <ul class="list-big-box">
                <li class="list-mall-box"  v-for="(item,index) in list" :key="index+'_list'">
                    <a href="#" class="list-link">
                        <div class="list-img-box">
                            <img :src="item.img"  class="list-img" v-lazy="item.img">
                            <div class="list-img-add">
                                <span class="list-img-pos"></span>{{province}}    
                            </div>
                            <div class="list-img-content">
                                {{item.subName}}
                            </div>                        
                        </div>
                        <div class="list-detail">
                            <div class="list-price">
                                <div class="list-old-price">
                                    票面价&yen;<span>{{item.priceOld}}</span>
                                </div>
                                <div class="list-current-price">
                                    &yen;<span>{{item.priceNow}}</span>
                                </div>
                            </div>
                            <div class="list-button">
                                立即预定
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>  
</template>

<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>
<script>

import detect from '@/utils/detect.js'

export default {
   props:["propsoff","province"],
   beforeCreate: function() {
        try {
            this.provinces = window.localStorage.province;
        } catch(e) {}
    },
    created: function(){
        this.$http.get('/static/ticketRmb.json').then(response => {
            this.commentlistInfo = response.body.data.indexInfo.caption;
            this.navlistInfor = response.body.data.indexInfo.filterOuter;        
        }, response => {
            console.log("get list data error")
        });
    },
    data () {
        return {
            commentlistInfo: [],
            navlistInfor:[],
            activeIndex: 0,
            bgColor: true,
            provinces: ""
        }
    },
    computed: {
        list: function() {
            var list = [];
            for (var i = 0; i < this.commentlistInfo.length; i++) {
                list.push(this.commentlistInfo[i]);
            }
            return list;
        },
        nav: function() {
            var nav = [];
            for (var i = 0; i<this.navlistInfor.length; i++) {
                nav.push(this.navlistInfor[i]);
            }
            return nav;
        }
    },
    methods: {
        handleClick: function(index) {
            this.activeIndex = index; 
        },
        handleScroll: function(){
            var ceilling = this.$refs.ceiling;
            if(document.body.scrollTop>=this.$refs.scrolllist.offsetTop){
                if(this.propsoff){
                    ceilling.className = 'activeNotTop';  
                }else{
                    ceilling.className = 'activeHaveTop'; 
                }              
            }else{
                ceilling.className = '';
                ceilling.className = "filter-outer";
            }
        }
    },
    mounted: function() {
        window.addEventListener("scroll", this.handleScroll)
    },
    destroyed: function() {
        window.removeEventListener("scroll", this.handleScroll)
    }
}
</script>

<style scoped>
    .more-special {
        font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
        font-size: .28rem;
        color: #333;
    }
    .top {
        width: 100%;
        min-height: .94rem;
    }
    .top-img {
        width: 100%;
        height: 100%;
    }
    .filter-outer {
        overflow: hidden;
        height: .94rem;
        margin: 0 .2rem;
        border: .18rem solid #000;
    }
    .nav {
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
    }
    .nav-box {        
        position: relative;
        height: 100%;
        width: 25%;
        padding-top: .22rem; 
        box-sizing: border-box;      
    }
    .nav-box::before {
        overflow:hidden;      
        position: absolute;
        top: .06rem;
        left: 50%;
        width: .22rem;
        height: .22rem; 
        margin-left: -.11rem;
        z-index: 2;  
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAyVBMVEUAAAAAAAAAAAAAAAAAAAAAAAADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACemgAREQADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+ABxbgD89QAGBgD48QDGwQCvqgCknwCFgQB5dgBVUwAuLQDg2gDb1QDVzwDMxgC2sQC1sACdmQCVkQB1cgBuawBZVwBLSQA2NQAyMQAcGwBsmG8pAAAAJ3RSTlMA9vzTBQHu5uGqcmdhRjH51s+1nJGJIvn38buxpKCCgVxTKhgWEwtCdh97AAAA2klEQVQY01WR15LDIAxFr2vWddO3903ATu+9/v9HRcJDSM7DRTozgBhw5Tf8CNK08vLpQePGjiCcMkVDy5Qc4/ucP1DEj6Ige+J8cFlGhTrv17kccvVNMrG5mqxySeQTqgOgVVJ7u7Jgw0cAdZYjqVlQZ+GPbzrIK3NlQ8rO1NilOuGVciwNGfVv4LsGRnafqY8hiJ6xI2rtf1h3ti+Id6BCy1bLQYcnaAINnqGv3GwsmBBAU733tBtmR6EIPBBf4o6qC8ar3co6S0Xka+ckMLSjasm2yrVEf9kFo/gyuctaCKMAAAAASUVORK5CYII=)0 0/contain no-repeat;
        content:'\0020';

    }
    .nav-box:nth-child(2)::before {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAt1BMVEUAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAACaISEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5Njb1NTV1GRlvGBguCgoGAQHZLi7BKiqrJSWCHBxtFxdTEhLwNDTQLS3HKyuyJyexJiagIyOfIyORICBXExNJEBA1CwsbBgZuvk/MAAAAJHRSTlMA99T7BQHu5uG0ql9G/PPPnJGJgnFoZDAiFPe7pKB1UzUqGAtVjogYAAAA1ElEQVQY01WPR5bCMBBEy5FxIOfJQTIGhjCReP9z0SU9W/AX9br+Qt1CzdvgKR2P261+VKsw85XgM3uVfJVG4pj5YmXmKcumybwLKYdWnQ/NQq85ZSLzgNP8T5NiLnMKTBuUZaEtez4BdClnuuJHmod3bjrqmm9jnyUXS2d/zQsPklvtKKUn4K5/J7/upY+ghE9nZ1KDKVo3dqWER6B9fdduwQsmQI83rIxbbhUZAJjY/27W5UkZ0ghCX92QhCBR51p2KQ3DuHJ+DsfHKGkEnt/JI1gu84gurulvirQAAAAASUVORK5CYII=)0 0/contain no-repeat;
    }
    .nav-box:nth-child(3)::before {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAvVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAAAABWjwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACM5wCK4wBBbQA+ZwAaKwB2xABsswBgnwBJeAA8ZAAvTQADBQCH3wB7ywBwuQBkpQBjpABalQBZlABShwAxUQApRAAeMQAPGQDmlIouAAAAJnRSTlMA/PjiBQH17tK0ql9G/OfWzpyRiYJxaGQwIhT31LukoHVTNSoYC89+ARAAAADXSURBVBjTVY/XdsIwEETH4IILodf0JhmTUBJ6+//PYsc6tuA+zNm9D9oRSj57r9Fw2PS7XqncuKaEWkOiU8gPcSQImO9GxhVlWNSZVZeyb9TlWE/1nFMsMnE4TbepFtKpzBEwfqDM6MiBTwBtyokuWMtWwRcvnXTJT27fJP9W1m7yF54ll9qSyR6Ct3ZW/j/KPoASfq2dyOqM4d/ZmRJegOZtr73DBiOgww4zU2qpSA/AyPx3Mc/OKifyIHTVHaEL4rVuZVukoR8U7imB5XsQVh2/0Uo8GK4r7zEl253rqwAAAABJRU5ErkJggg==)0 0/contain no-repeat;
    }
    .nav-box:nth-child(4)::before {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAA0lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1hZ4GDhECBgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABW1v9U0/smYHICBQZLut5CpsY7k683iqQpZnolXW8QJy5TzvZIs9VFq8w9mbY9mLU1hJ0yfZUucYcsboMnY3YeS1kdSVccRlMZP0sSLTYRKjIJFxxWRvflAAAAKXRSTlMA+PzTBQH+9eFyZ2Eu7eXWz7WpopyRiYJHF/n37+i7satcU0U1IyETC9wVyfwAAADeSURBVBjTVZHXcsIwEEUvtsFxoff0nkg2hBZ6L///S+wuIzSch6vdMxpVXImDaiWOS34zC4MXuYpwixQNIz/JMY95zncIUUZdGN5z3nksQyWcNvNEr7h6I9lyuBrNEk0kI6pfgZ8Cy5ScsOAlgDrLgTZMqMugzTvt9ZWx2ICy07V2Kis8U261JaX+BU+UfSv/H6iPkKP8s3ZArdOGf2N7PKkKlGhYG9nv8Am+gQafoSeuu1NMAOBL7nscLtODEiryvk11Q9kDk60pS67OUgjzRrofsPyG5YLjF2st82Vno2M1DuGNwBUAAAAASUVORK5CYII=)0 0/contain no-repeat;
    }
    .nav-font {
        width: 100%;
        height: 100%;
        font-size: .28rem;
        text-align: center;
        line-height: .72rem;
        border-top: .02rem solid #000;
        padding-left: 0.1rem;        
    }
    .navfont {
        background: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCABIAAoDAREAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcDBQYBCP/EACQQAAEEAgECBwAAAAAAAAAAAAEAAgMEBRESMbITFDRDc6Gx/8QAGgEAAgIDAAAAAAAAAAAAAAAAAAMCBgEEBf/EAB4RAQACAQQDAAAAAAAAAAAAAAABAwIREiExIjJx/9oADAMBAAIRAxEAPwD1SgBAcJQEfiNWdAJ3cW7RAUkmTAkcN9CVtxUwtci7jCStevtktrmUItzjfSR36u3hVxBZjZb05XFq7Mkncg53n7Pyv7irJX6x8KOTJN5QkKtV9mlVfoON6wde6/uKsGFnjBRuWG8m6VdxNZWxiA6eR2uriftb+N3COjXEbXOSQmsCdqW4J1EBAf/Z")0 0/contain no-repeat;
    }
    .list-big-box {
        overflow: hidden;
        margin: 0 .2rem;
        border-left: .08rem solid #000;
    }
    .list-link {
        color: #000;
    }
    .list-mall-box {
        box-sizing: border-box;
        float: left;
        width:50%;
        height: 4.6rem;
        border-bottom: .08rem solid #000;
        border-right: .08rem solid #000;
        background: #fff;
    }
    .list-img-box {
        position: relative;
        width: 100%;
        height: 75%;
        background-image: cover;

    }
    .list-img {
        width:100%;
        height: 100%;
        background-size: 100% 100%;
    }
    .list-img-add {
        position: absolute;
        left: 0;
        top:.06rem;
        font-size: .28rem;
        padding:0 .16rem 0 .32rem;
        color: #fff;
        background: #000 ;
        line-height: .38rem;
        border-radius: 0 .08rem .08rem 0;
        z-index: 1;
    }
    .list-img-pos {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: .08rem;
        width: .5rem;
        height: .52rem;
        margin-top: -.12rem;
        background: url(http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2090hotspring02/sprite.png) -4.28rem 0/6rem 3.2rem no-repeat;
    }
    .list-img-content {
        position: absolute;
        bottom: .08rem;
        left: .04rem;
        color: #fff;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .list-detail {
        padding: 0 .1rem;
        min-height: 1rem;
    }
    .list-detail {
        height: .52rem;
        padding: .1rem;
        line-height: .4rem;
    }
    .list-price {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }
    .list-old-price {
        font-size: .24rem;
        color: #acacac;
        text-decoration: line-through;
    }
    .list-current-price {
        font-size: .4rem;
        color: #f93636;
    }
    .list-button {
        height: 100%;
        min-width: 1.5rem;
        height: .56rem;
        margin: 0 auto;
        font-size: .3rem;
        background: #f93636;
        color: #fff;
        line-height: .56rem;
        text-align: center;
        border-radius: .06rem;        
    }
    .activeHaveTop {
        position: fixed;
        left: 0;
        top: 1.2rem;
        z-index: 1000;
        width: 100%
    }
    .activeNotTop {
        position: fixed;
        left:0;
        top: 0;
        z-index:1000;
        width: 100%
    }
    .navActive {
        color: #f93636;
        background: #fc0;
    }
     .activeImg {
         background-image: none; 
         border-top-color: #fff;
     }  
     .activeImgNext {
        background-image: none; 
     }
</style>