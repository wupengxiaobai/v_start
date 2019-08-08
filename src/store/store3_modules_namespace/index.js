import Vue from 'vue'
import Vuex from 'vuex'

// 管理模块
import test from './modules/test'
import test_namespace from "./modules/test_namespace"
import global from './modules/global'

// 打印日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        test,
        test_namespace,
        global
    },
    //  vuex工具
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store;