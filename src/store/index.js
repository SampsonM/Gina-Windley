import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const state = {
	infoPageData: {}
}

const getters = {}

const actions = {
	updateInfoPageData: ({ commit }, payload) => commit('updateInfoPageData', payload)
}

const mutations = {
	updateInfoPageData(state, payload) {
		state.infoPageData = payload;
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
