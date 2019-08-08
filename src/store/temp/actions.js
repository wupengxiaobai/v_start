/**
 * 推荐使用 actions 来作命令式"一次性"的提交工作 
 * 可以有异步操作
 */
import * as types from "./mutations-type";

import {
    StorageModel
} from "@/utils/storage.js"
const storage = new StorageModel()

/**
 * token 保存操作
 */
const TOKEN_KEY = 'token'
export const setToken = ({
    state,
    commit
}, token) => {
    storage.save(TOKEN_KEY, token)  //  保存本地
    commit(types.SET_TOKEN, token)
}