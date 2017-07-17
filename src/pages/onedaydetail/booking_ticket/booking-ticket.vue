<template>
    <div>
        <div class="booking-fliter" v-show="show">
            <div class="booking-predetermine">
                <booking-header :headerInfo="bookTicketInfo.header" @close="handleClose" :fff="handle"></booking-header>
                <booking-content :contentInfo="bookTicketInfo.content" :otherDay="otherDay" @close="handlereveal" @obtain="handleObtain"></booking-content>
                <div class="footer">立即预定</div>
                <transition>
                    <div v-show="reveal" class="calendar-section">
                        <div class="calendar-choose">
                            <h1 class="calendar-choose-time" v-if="title">{{title}}</h1>
                            <div class="single-big" @click="handleCloseCalendar">
                                <span class="header-city iconfont">&#xe61a;</span>
                            </div>
                        </div>
                        <booking-calendar :calendarInfo="bookTicketInfo.calendar" @show="handleShow"></booking-calendar>
                    </div>
                </transition>
            </div>
        </div>
        <div class="booking-button">
            <div class="booking-consult">咨询</div>
            <div @click="show = true" class="booking-promplt">立即预定</div>
        </div>
    </div>
</template>
<script>
    import header from './booking-header';
    import content from './booking-content';
    import calendar from '../../../components/calendar';

    export default {
        data() {
            return {
                otherDay: "",
                show: false,
                reveal: false,
                handle: 0,
                title: "选择时间"
            }
        },

        props: ["bookTicketInfo"],
        components: {
            "booking-header": header,
            "booking-content": content,
            "booking-calendar": calendar

        },
        methods: {
            handleClose: function () {
                this.show = false;
            },
            handlereveal: function () {
                this.reveal = true;
            },
            handleShow: function (month, date) {
                this.reveal = false;
                if (month) {
                    this.otherDay = month + "月" + date + "日";
                }
            },
            handleObtain: function (index) {
                this.handle = index;
            },

            handleCloseCalendar: function () {
                this.reveal = false;
            }
        }
    }

</script>


<style scoped>
    .booking-fliter {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
        background: rgba(127, 127, 127, 0.5);
        z-index: 1001;
    }

    .booking-predetermine {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        min-height: 10.72rem;
        background: #fff;
    }

    .booking-button {
        position: fixed;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        border: 0 none;
        background: #ff9800;
        color: #fff;
        z-index: 1000;
    }

    .booking-consult {
        float: left;
        padding: 0.36rem 0;
        width: 1.02rem;
        text-align: center;
        background: #fff;
        color: #616161;
    }

    .booking-promplt {
        overflow: hidden;
        height: .98rem;
        background: #ff9800;
        color: #fff;
        font-size: .4rem;
        text-align: center;
        line-height: .98rem;
    }

    .calendar-section {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        min-height: 10.72rem;
        background: #fff;
    }

    .calendar-choose {
        line-height: 1rem;
        font-size: .34rem;
        text-align: center;
        color: #212121;
    }

    .single-big {
        position: absolute;
        top: 0;
        right: .2rem;
        width: .88rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
    }

    .footer {
        position: relative;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        border: 0 none;
        background: #ff9800;
        color: #fff;
        font: normal .36rem/1rem Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
        text-align: center;
    }

    .header-city {
        color: #9e9e9e;
        font-size: .5rem;
    }

    .v-leave-active {
        transition: all .6s ease;
    }

    .v-enter-to,
    .v-leave {
        bottom: 0;
        transition: all .6s ease;
    }

    .v-enter,
    .v-leave-to {
        bottom: -10.72rem;
    }

    .td-active {
        border-radius: .2rem;
        background: #00bcd4;
    }
</style>