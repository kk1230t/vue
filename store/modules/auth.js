const authStore = {
  namespaced: true,
  state: {
    tokenInfo: null,
    uuid: null
  },
  getters: {},
  mutations: {
    setTokenInfo(state, payload) {
      state.tokenInfo = payload
    },
    setUuid(state, payload) {
      state.uuid = payload
    }
  },
  actions: {}
}

export default authStore
