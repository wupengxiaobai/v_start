import * as types from '../types';
import axios from "axios"

const state = {
    listNameSpace: []
}

const mutations = {
    ["SET_LIST"](state, list) {
        state.listNameSpace = list
    }
}

const actions = {
    // 带命名空间的 module 中 dispatch 和 commit 都被局部化，可以通过 第三个参数 root 设置为 true 访问全局空间
    async getListAndSetNamespace({
        dispatch,
        commit,
        rootGetters
    }, queryParams) {
        const ret = await axios.get('api/test/test1', {
            params: queryParams
        }).then(res => res.data.data)
        commit('SET_LIST', ret) //  访问局部的 mutations 
        // commit("SET_LIST", ret, { root: true }) //  访问全局的 mutations
        dispatch("getListAndSet", ret, { root: true })  //  访问全局的 actions
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}