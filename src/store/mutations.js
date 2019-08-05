import * as types from './mutations-type'

const mutations = {
  [types.SET_ONE_DATA](state, data) {
    state.oneData = data
  },
  [types.SET_OTHER_DATA](state, data) {
    state.otherData = data
  }
}

export default mutations