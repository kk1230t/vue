import commonData from '@/util/dummy/common'

const commonStore = {
  namespaced: true,
  state: {
    menus: commonData.menusData,
    commonMenu: commonData.commonMenu,
    nowLoadingBar: false // 페이지 로딩 바
  },
  getters: {},
  mutations: {
    showLoadingBar: (state) => {
      state.nowLoadingBar = true
    },
    hideLoadingBar: (state) => {
      state.nowLoadingBar = false
    }

  },
  actions: {
    // showLoadingBar: (commit) => {
    //   console.log(commit)
    //   commit('showLoadingBar')
    // }

  }
}

export default commonStore
