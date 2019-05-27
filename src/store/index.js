import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import { projects } from '../assets/constants'

Vue.use(Vuex)

const state = {
	projectPageData: {}
}

const getters = {}

const actions = {
	updateProjectPageData: ({ commit, state }, payload) => {		
		const data = projects.find(proj => proj.name === payload.section)
		commit('UPDATE_PROJECT_PAGE_DATA', data)
	}
}

const mutations = {
	UPDATE_PROJECT_PAGE_DATA(state, payload) {
		state.projectPageData = payload;
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
