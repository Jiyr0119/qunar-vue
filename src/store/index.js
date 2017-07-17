import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
	state: state,
	getters,
  	actions,
  	mutations
})

