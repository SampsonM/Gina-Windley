import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const state = {
	infoPageData: {}
}

const getters = {}

const actions = {
	updateInfoPageData: ({ commit }, payload) => commit('UPDATE_INFO_PAGE_DATA', payload)
}

const mutations = {
	UPDATE_INFO_PAGE_DATA(state, payload) {
		state.infoPageData = payload;
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
