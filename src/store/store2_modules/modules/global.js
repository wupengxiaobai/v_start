import * as types from '../types';
import {
    StorageModel
} from "@/utils/storage.js";
const storage = new StorageModel();

const TOKEN_NAME = 'token';

const state = {
    token: storage.get(TOKEN_NAME) || ""
}

const mutations = {
    [types.SET_TOKEN](state, token) {
        state.token = token
    }
}

const actions = {
    setToken({
        state,
        commit
    }, token) {
        if (token) {
            storage.save(TOKEN_NAME, token)
            commit(types.SET_TOKEN, token)
        }
    }
}

const getters = {
    token: state => state.token,
}

export default {
    state,
    actions,
    getters,
    mutations
}