import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {//data
  count: 1
}

const mutations = {//methoed
  add (state,n) {
    state.count +=n
  },
  reduce (state) {
    state.count--
  }
}

const actions = {
  addAction (context,status) {
    context.commit('add', status)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    },3000)
    console.log('我比reduce先执行')
  }
}

const getters = {//computed
  getCount: (state) => {
    return state.count +100
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})