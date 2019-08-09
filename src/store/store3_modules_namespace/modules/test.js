import * as types from '../types';
import axios from "axios"

const state = {
    list: [],
    tempList: []
}

const mutations = {
    [types.SET_LIST](state, list) {
        state.list = list
    },

    [types.SET_TEMP_LIST](state, list) {
        state.tempList = list
    }
}

const actions = {
    async getListAndSet({
        state,
        commit
    }, queryParams) {
        const ret = await axios.get('api/test/test1', {
            params: queryParams
        }).then(res => res.data.data)
        commit(types.SET_LIST, ret)
        commit(types.SET_TEMP_LIST, ret)
        localStorage.setItem('_list', ret)
    }
}

const getters = {
    list: state => state.list,
    tempList: state => state.tempList,
    whiteUser: state => state.list.filter(item => (/白/g).test(item.nickname))
}

export default {
    state,
    actions,
    getters,
    mutations
}