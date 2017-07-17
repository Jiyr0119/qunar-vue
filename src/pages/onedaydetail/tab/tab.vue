<template>
	<div class="tab-main">
		<ul :class='{tab:true, "tab-fixed":tabFixed, "border-bottom":true}' v-if="tabShow">
			<li v-for="(item, index) in tabInfo.index.tabs" :class="{tabs:true, active: index==activeIndex}" @click="hadleTabItemClick(index)"
			 :key="index + 'tab'">{{item.title}}</li>
		</ul>
		<tour-itinerary :isBigMapOpen="isBigMapOpen" :tourItineraryInfo="tabInfo.tourItinerary" @openMap="openMap"></tour-itinerary>
		<expense-explanation :expenseExplanationInfo="tabInfo.expenseExplanation"></expense-explanation>
		<instructions :instructionsInfo="tabInfo.instructions"></instructions>
	</div>
</template>

<script>
	import TourItinerary from './tour-itinerary';
	import ExpenseExplanation from './expense-explanation';
	import Instructions from './instructions';


	export default {

		data() {
			return {
				mainOffsetTop: 0,
				tabOffsetHeight: 0,
				headerOffsetHeight: 0,
				expenseElementOffsetTop: 0,
				expenseElementOffsetHeight: 0,
				instructionsElementOffsetTop: 0,
				haveGetOffset: false
			}
		},

		props: [
			"scrollTop", "tabInfo", "isBigMapOpen"
		],

		components: {
			"tour-itinerary": TourItinerary,
			"expense-explanation": ExpenseExplanation,
			"instructions": Instructions
		},

		methods: {

			hadleTabItemClick: function (index) {
				if (index == 0) {
					document.body.scrollTop = this.mainOffsetTop - this.headerOffsetHeight;
				} else if (index == 1) {
					document.body.scrollTop = this.mainOffsetTop + this.expenseElementOffsetTop - this.tabOffsetHeight - this.headerOffsetHeight;
				} else if (index == 2) {
					document.body.scrollTop = this.mainOffsetTop + this.instructionsElementOffsetTop - this.tabOffsetHeight - this.headerOffsetHeight;
				}
			},

			openMap: function () {
				this.tabShow = false;
				this.$emit("openMap");
			}

		},

		computed: {

			tabShow: function () {
				return !this.isBigMapOpen
			},

			tabFixed: function () {
				return this.scrollTop > this.mainOffsetTop - this.headerOffsetHeight;
			},

			activeIndex: function () {
				var index = 0;
				var criticalValue_1 = this.mainOffsetTop + this.expenseElementOffsetTop - window.innerHeight / 2;
				var criticalValue_2 = this.mainOffsetTop + this.expenseElementOffsetTop + this.expenseElementOffsetHeight - window.innerHeight / 2;
				if (this.scrollTop <= criticalValue_1) {
					index = 0
				} else if (this.scrollTop > criticalValue_1 && this.scrollTop <= criticalValue_2) {
					index = 1;
				} else {
					index = 2;
				}
				return index;
			}
		},

		updated: function () {
			if (!this.haveGetOffset) {
				var tabMainElement = document.querySelectorAll('.tab-main');
				var tabElement = document.querySelectorAll('.tab');
				var headerElement = document.querySelectorAll('.header');
				var expenseElement = document.querySelectorAll('.expense-main');
				var instructionsElement = document.querySelectorAll('.instructions-main');
				this.mainOffsetTop = tabMainElement[0].offsetTop;
				this.tabOffsetHeight = tabElement[0].offsetHeight;
				this.headerOffsetHeight = headerElement[0].offsetHeight;
				this.expenseElementOffsetTop = expenseElement[0].offsetTop;
				this.expenseElementOffsetHeight = expenseElement[0].offsetHeight;
				this.instructionsElementOffsetTop = instructionsElement[0].offsetTop;
				this.haveGetOffset = true;
				// console.log("主体Top" + this.mainOffsetTop, "tabHeight" + this.tabOffsetHeight, "头部Height" + this.headerOffsetHeight, "费用top" + this.expenseElementOffsetTop, "费用height" + this.expenseElementOffsetHeight, "第三个top" + this.instructionsElementOffsetTop)
			}
		}
	}

</script>


<style scoped>
	.tab-main {
		position: relative;
		margin-top: .2rem;
	}

	.tab {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		height: .84rem;
		font-size: .28rem;
		background: #fff;
		z-index: 1000;
	}

	.tab-fixed {
		position: fixed;
		top: .88rem;
	}

	.tab-fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: .88rem;
	}

	.tabs {
		flex: 1;
		text-align: center;
		width: 30%;
		height: .84rem;
		line-height: .84rem;
		color: #616161;
	}

	.active {
		box-sizing: border-box;
		color: #00afc7;
		border-bottom: .04rem solid #00afc7;
	}
</style>