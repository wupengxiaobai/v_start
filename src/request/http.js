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
 * @param {*} otherMessage 其它码及提示 
 */
const errorHandle = (status, otherMessage) => {
    switch (status) {
        case 401:
            //  401: 未登录状态, 跳转登录页
            toLogin()
            break;
        case 403:
            //  403: 登录过期， 清除token 并跳转登录页
            tip('登录过期，请重新登录')

            // store.commit('loginSuccess', null)
            setTimeout(() => {
                toLogin()
            }, 300)
            break;

            //  请求资源不存在，网页丢失
        case 404:
            tip('请求资源不存在')
            break;

        default:
            tip(otherMessage)
    }
}

// 创建axios实例
var instance = axios.create({
    timeout: 1000 * 20
});

// 默认请求头类型
instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/** 
 * 请求拦截器 
 */
instance.interceptors.request.use(
    config => {
        // let token = store.getters.token;
        // token && (config.headers.Authorization = token);
        if (config.method === 'post') {
            let data = Qs.parse(config.data)
            config.data = Qs.stringify({
                // access_token: token, //  附加默认参数
                ...data
            })
        } else if (config.method === 'get') {
            let data = Qs.parse(config.params)
            config.params = Qs.stringify({
                ...data
            })
        }
        return config;
    },
    error => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
    res => {
        return (res.status === 200 ? Promise.resolve(res) : Promise.reject(res))
    },
    error => {
        const {
            response
        } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 断网
            console.log('请求超时或断网.....')
            // store.commit('changeNetwork', false);
        }
    }
);

export default instance;