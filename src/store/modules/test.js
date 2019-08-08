import * as types from '../type';

const state = {
  test: ""
}

const mutations = {
  [types.SET_TEST](state, test) {
    state.test = test
  }
}

const actions = {}

const getters = {
  test: state => state.test,
}

export default {
  state,
  actions,
  getters,
  mutations
}