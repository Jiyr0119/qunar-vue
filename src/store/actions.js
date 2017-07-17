export default {
	changeCity: function(context, city) {
		context.commit('changeCity', city)
    },
    changeCode: function(context, code) {
		context.commit('changeCode', code)
    }
}