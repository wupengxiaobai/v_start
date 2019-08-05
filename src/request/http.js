/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import Qs from 'qs'
import router from '../router';
import store from '../store';

import {
  Toast
} from 'vant';

import {
  fixedParams
} from "@/config.js"


const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: false
  })
}

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 错误统一处理
 * @param {Number} status 错误状态码 
 * @param {*} other 
 */
const errorHandle = (status, other) => {
  switch (status) {
    //  401: 未登录状态, 跳转登录页
    case 401:
      toLogin()
      break;
      //  403: 登录过期， 清除token 并跳转登录页

    case 403:
      tip('登录过期，请重新登录')
      // localStorage.removeItem(fixedParams.TOKEN_KEY)
      // store.commit('loginSuccess', null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break;

      //  请求资源不存在，网页丢失
    case 404:
      tip('请求资源不存在')
      break;

    default:
      console.log(other)
  }
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 20
});

// 设置post请求头
instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.defaults.transformRequest = [obj => Qs.stringify(obj)];

/** 
 * 请求拦截器 
 */
instance.interceptors.request.use(
  config => {
    Toast.loading();
    // TODO: 统一添加请求参数失败 【问题】转字符串设置 config.data 为 ""
    var token = store.getters.tokenKey;
    token && (config.headers.Authorization = token);
    /* if (config.method === 'post') {
      var data = Qs.parse(config.data)
      // config.data = JSON.stringify({
      //   access_token: token,
      //   ...data
      // })
      config.data = {
        access_token: token,
        ...data
      }
    } else if (config.method === 'get') {
      var data = Qs.parse(config.params)
      config.params = {
        access_token: token,
        ...data
      }
    } */
    return config;
  },
  error => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    // console.log('interceptors.response-----------', res)
    Toast.clear();
    return (res.status === 200 ? Promise.resolve(res) : Promise.reject(res));
  },
  // 请求失败
  error => {
    Toast.fail('加载出错');
    const {
      response
    } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      console.log('请求超时或断网.....')
      // store.commit('changeNetwork', false);
    }
  }
);

export default instance;