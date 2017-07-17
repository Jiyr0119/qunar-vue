<template>
    <div class="titket-city">
        <ul class="city">
            <li :class="{'city-items' : true , activeIndexImg:index==activeIndex}" 
            v-for="(items, index) in cityItmes" 
            :key="index + '_city_itmes'"                 
            @click="handleClick(index)"
            :data-cityname="items.city">
                <span class="city-change"  @click="handleCityClick">
                    <a href="javascript:void(0)" 
                    class="city-items-a"
                    >{{items.city}}</a>
                </span>
            </li>
            <li :class="{'city-items':true , activeIndexImg:activeMoreImg}" @click="handleMoreCity">
                <span>
                    <a href="javascript:void(0)" 
                    class="city-items-a" 
                    ref="moreCity"
                    >查看更多</a>
                </span>
            </li>
        </ul> 
    </div>  
</template>

<script>

export default {
    created: function() {
        this.$http.get('/static/ticketRmb.json').then(response => {
            this.commentcityItmes = response.body.data.indexInfo.cityItem;
        }, response => {
            console.log("get list data error")
        });
    },
    data() {
        return {
            commentcityItmes:[],
            activeIndex:0,
            cityIndex:0,
            activeMoreImg: false
        }
    },
    computed: {
        cityItmes: function() {
            var cityItmes = [];
            var cityIndex = window.localStorage.index;
            if(cityIndex){
                this.activeIndex=cityIndex;
            }

            for (var i = 0; i < this.commentcityItmes.length; i++) {
                cityItmes.push(this.commentcityItmes[i]);
            }
            return cityItmes;
        }
    },
    methods: {
        handleClick: function(index) {
            this.activeIndex = index;
            try {
                window.localStorage.index = index;
            } catch(e) {}      
        },
        handleMoreCity: function() {
            this.$emit("moreCityShow");
            this.activeMoreImg = true;
            this.activeIndex = -1;
        },
        handleCityClick: function(e) {
            this.activeMoreImg = false;
            var province = e.target.innerText;
            try {
                window.localStorage.province = province;
            } catch(e) {}
            this.$emit("provinceChange", province);
        }
    }
}
</script>


<style scoped>
    .titket-city {
        width: 100%;
        height: 1.8rem;   
    }
    .city {
        width:98%;
        height:1.7rem;
        margin: 1%;
    }
    .city-change{
        display: inline-block;
        width:98%;
        height: .9rem;
        margin: 1%;
    }
    .city-items {
        float: left;
        width: 25%;
        height: .9rem;
        text-align: center;
        line-height: .8rem;
        background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/menu_sprite.png) .1rem .1rem/400% 4.1rem no-repeat;
    }
    .city-items:nth-child(2) {
        background-position: 32.3% -3%;
    }
    .city-items:nth-child(3) {
        background-position: 66.7% -3%;
    }
    .city-items:nth-child(4) {
        background-position: 99.9% -3%;
    }
    .city-items:nth-child(5) {
        background-position: -1% 25%;
    }
    .city-items:nth-child(6) {
        background-position: 32.3% 25%;
    }
    .city-items:nth-child(7) {
        background-position: 66.7% 25.5%;
    }
    .city-items:nth-child(8) {
        background-position: 99.9% 25%;
    }
    .city-items-a {
        color: #fff;
    } 
    .activeIndexImg:nth-child(1) {
        background-position: -1.7% 73.6%;
    }
   .activeIndexImg:nth-child(2) {
        background-position: 32.3% 74%;
   }
   .activeIndexImg:nth-child(3) {
        background-position: 66.7% 74%;
   }
   .activeIndexImg:nth-child(4) {
        background-position: 99.9% 74%;
   }
   .activeIndexImg:nth-child(5) {
        background-position: -1.4% 101.6%;
   }
   .activeIndexImg:nth-child(6) {
        background-position: 32.3% 102%;
   }
   .activeIndexImg:nth-child(7) {
        background-position: 66.7% 102.5%;
   }
   .activeIndexImg:nth-child(8) {
        background-position: -3.5% 75%;
   } 
</style>
