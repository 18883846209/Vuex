import vue from 'vue'
import vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

vue.use(vuex)
export default new vuex.Store({
  // actions,
  // mutations,
  // getters
  state: {
    list: ['aaa']
  },
  getters: {
    getList (state) {
      return state.list
    }
  },
  actions: {
    add (context, param) {
      context.commit('addevent', param)
    }
  },
  mutations: {
    addevent (state, text) {
      state.list.push(text)
    }
  }
})
