/**
 *  
 * 
 * 
 */

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
    // 带命名空间的 module 中 dispatch 和 commit 都被局部化，可以通过第三个参数对象 {root: true} 访问
    // 参数对象中会自动添加参数 rootState rootGtters， 分别表示全局下的数据 
    async getListAndSetNamespace({
        dispatch,
        commit,
        rootState,
        rootGetters
    }, queryParams) {
        const ret = await axios.get('api/test/test1', {
            params: queryParams
        }).then(res => res.data.data)
        commit('SET_LIST', ret) //  访问局部的 mutations 
        commit("SET_LIST", ret, { root: true }) //  访问全局下的 mutations
        dispatch("getListAndSet", ret, { root: true }) //  访问全局下的 actions

        console.log('rootState: ', rootState)
        console.log('rootGetters: ', rootGetters)
    }
}

const getters = {
    // 带命名空间的 module 中 state 和 getters 都被局部化， 会自动添加 第三个参数（rootState）第四个参数（rootGetters）可以通过它们访问全局属性
    ListNameSpaceGetters(state, getters, rootState, rootGetters) {
        return rootGetters.tempList
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}