<template>
	<div class="content">
		<div class="content-days">日期选择</div>
		<div class="content-choose">
			<span :class="{'content-choose-days': true,'content-border':true, 'content-border-dark':index == 0, active: index==isActive}" v-for="(item, index) in contentInfo.item" @click="handleDateClick(index)">
				<em class="content-dark">{{item.title}}</em>
				<strong class="content-day-dark" v-if="index != 3">{{item.date}}</strong>
				<strong class="content-day-dark" v-else>{{otherDay}}</strong>
			</span>
		</div>
		<div class="booking-note">
			<span class="booking-select">
				<em class="booking-pepole">{{contentInfo.other.title}}</em>
				<i class="booking-combination">
					<p v-for="(item, index) in contentInfo.other.items" :class="{'booking-adult':true, 'booking-children':index==Active}" @click="handleBtnPeople(index)">{{item}}</p>
				</i>
			</span>
			<span class="booking-select" v-for="(item,index) in contentInfo.items" :key="index + 'last'">
				<em class="booking-pepole">{{item.content}}</em>
				<i class="booking-combinatio">
					<p class=" booking-adult booking-children ">{{item.time}}</p>
				</i>
			</span>
			
		</div>
	</div>
</template>
<script>                                  
export default {
	data() {                                                                                                
		return {
			show: true,
			isActive: 1,
			Active: 0
		}
	},

	props: ["otherDay","contentInfo"],
	watch: {
		otherDay: function () {
			this.contentInfo.item[3].date = this.otherDay;
		}
	},
	methods: {
		handleDateClick: function (index) {
			if (index != 0) {
				this.isActive = index;
				if (index == 3) {
					this.$emit("close")
				}
			}
		},
		handleBtnPeople: function (index) {
			this.Active = index;
			this.$emit("obtain", index);
		}

	}
}
</script>


<style scoped>
	
.active::after {
    content: '√';
    display: block;
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    color: #fff;
    font-family: 'mpiconfont';
    speak: none;
    font-size: .32rem;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.content {
	padding: 0 .2rem;
	height: 417.6px;
	overflow: hidden;
}

.content-days {
	line-height: 1rem;
	color: #333;
	font-size: .26rem;
}

.content-choose-days {
	box-sizing: border-box;
	float: left;
	width: 22.5%;
	height: .86rem;
	display: inline-block;
	min-width: 1.2rem;
	min-height: .82rem;
	border: .02rem solid #bdbdbd;
	border-radius: .1rem;
}

.content-dark {
	width: 100%;
	display: block;
	text-align: center;
	padding-top: .08rem;
	font-size: .28rem;
	line-height: .36rem;
}

.content-darks {
	width: 100%;
	display: block;
	text-align: center;
	font-size: .24rem;
	line-height: .36rem;
	padding-bottom: .08rem;
	color: #888;
}

.content-border {
	margin-left: 3.33%
}

.content-border:nth-child(1) {
	margin-left: 0;
}

.content-border:nth-child(4) {
	line-height: 100%;
}

.content-border-dark {
	border-color: #ececec;
	color: #dedede;
}

.content-day-dark {
	width: 100%;
	display: block;
	text-align: center;
	font-size: .28rem;
	line-height: .36rem;

	padding-bottom: .08rem;
}

.content-day-dark:nth-child(4) {
	display: inline;
}

.content-other {
	display: block;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: .86rem;
}

.content-choose {
	overflow: hidden;
	padding-bottom: .3rem;
}

.booking-select {
	display: block;
	width: 100%;
}

.booking-note {
	overflow: hidden;
}

.booking-pepole {
	padding-top: .1rem;
	line-height: .66rem;
	color: #333;
	font-size: .26rem;
	display: block;
}

.booking-combination {
	display: block;
	overflow: hidden;
	margin-top: -.15rem;
}

.booking-adult {
	display: inline-block;
	margin-right: .2rem;
	margin-top: .15rem;
	border: .02rem solid #c7ced4;
	padding: 0 .2rem;
	line-height: .53rem;
	background: #fff;
	font-size: .28rem;
	border-radius: .1rem;
}

.booking-children {
	border: .02rem solid #0089a1;
	background: #b2eaf2;
	color: #0089a1;
}

.active {
	position: relative;
	border-color: #00bcd4;
	color: #fff;
	background: #00bcd4;
}

.active .content-darks {
	color: #fff;
}
</style>