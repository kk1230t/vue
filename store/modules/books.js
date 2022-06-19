const bookStore = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {},
  mutations: {
    setBookList(state, payload) {
      state.list = payload
    }
  },
  actions: {}
}

export default bookStore
