/**
 * article模块接口列表
 */
import {
    testApi as test
} from './base'; // 导入接口

import axios from '../http'; // 导入http中创建的axios实例

const testModel = {
    // 列表列表    
    getTestData() {
        return axios({
            url: test.getTest
        }).then(res => {
            if (res.status == 200) {
                return Promise.resolve(res.data)
            }
            return Promise.reject("err")
        }).catch(err => {
            return Promise.reject("err")
        });
    },

    // 演示详情
    postMassage() {
        return axios({
            method: 'post',
            url: test.postTest
        }).then(res => {
            if (res.status == 200) {
                return Promise.resolve(res.data)
            }
            return Promise.reject("err")
        }).catch(err => {
            return Promise.reject("err")
        });
    }

    // 其他接口…………
}

export {
    testModel
}