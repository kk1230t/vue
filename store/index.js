import { Store } from 'vuex'
import storeModules from '@/store/modules'

export default () =>
  new Store({
    state: () => ({}),
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      ...storeModules
    }
  })
