/**
 * article模块接口列表
 */
import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const testModel = {
    // 演示列表列表    
    getTestData() {
        return axios.get(`${base.TEST_BASE_URL}/test/test1`);
    },

    // 演示详情
    postMassage() {
        return axios.post(`${base.TEST_BASE_URL}/test/test2`)
    }

    // 其他接口…………
}

export {
    testModel
}