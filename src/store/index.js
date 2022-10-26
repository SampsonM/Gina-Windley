import { createStore } from 'vuex'
import projects from '../assets/projects.json'

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

const createAppStore = () => createStore({
  state,
  getters,
  actions,
  mutations
})

export default createAppStore
