import * as types from '../type';
import {
  StorageModel
} from "@/utils/storage.js";
const storage = new StorageModel();

const TOKEN_NAME = 'token';

const state = {
  token: storage.get(TOKEN_NAME) || 'tempToken'
}

const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token
  }
}

const actions = {
  setToken({
    state,
    commit,
    rootState
  }, token) {
    if (token) {
      storage.save(TOKEN_NAME, token)
      commit(types.SET_TOKEN, token)
    }
  }
}

const getters = {
  token: (state, getters, rootState) => state.token,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}