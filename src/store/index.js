import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import projects from '../assets/projects.json'

Vue.use(Vuex)

const state = {
	projectPageData: {}
}

const getters = {}

const actions = {
	updateProjectPageData: ({ commit, dispatch }, payload) => {
		const data = projects.find(proj => proj.name === payload.section)
		commit('UPDATE_PROJECT_PAGE_DATA', data)
		dispatch('updateLocalstorageProjectData', data)
	},
	updateLocalstorageProjectData(context, payload) {
		window.localStorage.setItem('projectInfo', JSON.stringify(payload))
	},
	getLocalStorageProjectInfo({ commit }) {
		const projectInfo = window.localStorage.getItem('projectInfo')
		commit('UPDATE_PROJECT_PAGE_DATA', JSON.parse(projectInfo))
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
