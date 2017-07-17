<template>
    <div class="calendar">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
            <swiper-slide v-for="(item, monthIndex) in calendarInfo.months" :key="monthIndex+'slide'">
                <div class="calendars">
                    <table class="calendar-days">
                        <caption class="calendar-caption">{{item.title}}</caption>
                        <thead>
                            <tr>
                                <th class="calendar-day">日</th>
                                <th class="calendar-day">一</th>
                                <th class="calendar-day">二</th>
                                <th class="calendar-day">三</th>
                                <th class="calendar-day">四</th>
                                <th class="calendar-day">五</th>
                                <th class="calendar-day">六</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(itemInner1, trIndex) in item.date" :key="trIndex+'tr'">
                                <td v-for="(itemInner, tdIndex) in itemInner1" :class="{unable: itemInner.price == '', today:itemInner.date == '今天','calendar-unit':true, 'td-active':monthIndex == dataMonthIndex && trIndex == dataTrIndex && tdIndex ==dataTdIndex }"
                                    :key="tdIndex+'td'" @click="handleDateClick(monthIndex, trIndex, tdIndex)">
                                    <p class="calendar-bgc">{{itemInner.date}}</p>
                                    <p class="calendar-data" v-if="itemInner.price">&yen;{{itemInner.price}}
                                        <span class="calendar-sapn">起</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" id="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {

        props: ["calendarInfo"],

        data() {
            return {
                dataMonthIndex: 100,
                dataTrIndex: 100,
                dataTdIndex: 100,
                swiperOption: {
                    autoplay: false,
                    direction: 'horizontal',
                    autoHeight: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper
                }
            }
        },
        methods: {
            handleDateClick: function (monthIndex, trIndex, tdIndex) {
                var this_ = this;
                // console.log(trToDay, tdToDay)
                if (trIndex <= this.calendarInfo.months[monthIndex].firstDay.tr && tdIndex <= this.calendarInfo.months[monthIndex].firstDay.td) {

                } else if (trIndex < this.calendarInfo.months[monthIndex].firstDay.tr) {

                } else {
                    this.dataMonthIndex = monthIndex;
                    this.dataTrIndex = trIndex;
                    this.dataTdIndex = tdIndex;
                    setTimeout(function () {
                        this_.$emit("show", this_.calendarInfo.months[monthIndex].month, this_.calendarInfo.months[monthIndex].date[trIndex][tdIndex].date)
                    }, 300)
                }

            }

        }
    }

</script>

<style scoped>
    .calendar-sapn {
        color: #ccc;
    }

    .calendar-data {
        font-size: .1rem;
        color: orange;
    }

    .calendar-bgc {
        font-size: .3rem;
        display: block;
        padding-top: .1rem;
        line-height: .4rem;
    }

    .iconimg {
        position: absolute;
        top: 0;
        right: 0.2rem;
        width: .88rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        color: #9e9e9e;
        font-size: .3rem;
    }

    .calendar-disabled {
        color: #9e9e9e;
    }

    .calendar-unit {
        height: 1rem;
        vertical-align: top;
        width: 14.3%;
        text-align: center;
    }

    .calendar-day {
        color: #212121;
        font-size: .24rem;
        line-height: .5rem;
        width: 14.3%;
        text-align: center;
    }

    .calendar-days {
        border-collapse: collapse;
        border-spacing: 0;
        text-align: left;
        width: 100%;
        table-layout: fixed;
        caption-side: top;
    }

    .calendar-caption {
        color: #212121;
        font-size: .28rem;
        line-height: .92rem;
        text-align: center;
    }

    .calendars {
        margin: 0 .2rem;
        background: #fff;
    }

    .swiper-button-next {
        width: .5rem;
        height: .5rem;
        top: .6rem;
    }

    .swiper-button-prev {
        width: .5rem;
        height: .5rem;
        top: .6rem;
    }

    .today {
        background: #e3e3e3;
        border-radius: .2rem;
        color: #9e9e9e;
    }

    .unable{
        color: #9e9e9e;
    }

    .td-active {
        border-radius: .2rem;
        background: #00bcd4;
    }

    .td-active .calendar-bgc,
    .td-active .calendar-data,
    .td-active .calendar-sapn {
        color: white;
    }
</style>