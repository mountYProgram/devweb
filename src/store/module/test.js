const state = {
	tableData: []
}

const getters = {
	getData: (state, getters) => {
		return state.tableData;
	}
}

const actions = {
	updateData: ({commit, state}, payload) => {
		commit('setData', payload);
	}
}

const mutations = {
	setData: (state, payload) => {
		state.tableData = payload;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}