import * as types from './mutations-type'

const mutations = {




    /**
     * 设置 token
     */
    [types.SET_TOKEN](state, token) {
        state.token = token
    }
}

export default mutations