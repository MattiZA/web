const state = {
  closed: false
}

const mutations = {
  SET_CLOSED(state, closed) {
    state.closed = closed
  }
}

const getters = {}

const actions = {
  openNavigation({ commit }) {
    commit('SET_CLOSED', false)
  },
  closeNavigation({ commit }) {
    commit('SET_CLOSED', true)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
