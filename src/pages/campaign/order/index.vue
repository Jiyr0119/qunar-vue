<template>
	<div class="cam-order-main">
		<order-header></order-header>
		<order-content v-on:listenToChildEvent="handleChange"></order-content>
		<order-footer :numberInfo="number"></order-footer>
	</div>
</template>

<script>

	import header from './header'
	import content from './content'
	import footer from './footer'

	export default {
		data () {
			return {
				number: 1
			}
		},

		components: {
			"order-header": header,
			"order-content": content,
			"order-footer": footer
		},

		methods: {
			handleChange: function(numbers) {
				this.number = numbers
			}		
		}
	}
</script>


<style scoped>

	.cam-order-main {
		position: absolute;
		left: 0;
		top: 0;	
		width: 100%;
		min-height: 100%;
		background: #f2f8fb;
	}

</style>
