import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import { projects } from '../assets/constants'

Vue.use(Vuex)

const state = {
	infoPageData: {}
}

const getters = {}

const actions = {
	updateInfoPageData: ({ commit, state }, payload) => {
		
		const data = projects.find(proj => proj.name === payload.section)

		commit('UPDATE_INFO_PAGE_DATA', data)
	}
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
