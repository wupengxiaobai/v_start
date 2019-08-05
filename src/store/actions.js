/**
 * 一次动作多次操作 mutations 推荐使用 actions 来作命令式"一次性"的提交工作
 * actions commit 中可以有异步操作（mutations）
 */
import * as types from './mutations-type'

const dataKey = (keyName) => `__${keyName}__`


function findRandomIndex(list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}

function getLocalStorage(key) {
  return window.localStorage.getItem(dataKey(key))
}

function setLoaclStorage(key, value) {
  if (!getLocalStorage(key)) {
    console.log('本地不存在数据')
    window.localStorage.setItem(dataKey(key), value)
    return
  }

  console.log('本地已存在' + key + '数据 ')
}

export const commitUpdateManyData = function ({
  commit,
  state
}, {
  oneData,
  otherData
}) {
  commit(types.SET_ONE_DATA, oneData)
  setLoaclStorage('oneData', oneData)
  commit(types.SET_OTHER_DATA, otherData)
  setLoaclStorage('otherData', otherData)
}