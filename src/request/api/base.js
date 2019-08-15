/**
 * 域名选择&接口管理
 */
const base = {
  // 开发
  DEVT_BASE_URL: 'http://localhost:5000/',
  // 测试
  TEST_BASE_URL: 'http://localhost:3005/',
}

let BASE_URL = process.env.NODE_ENV == 'development' ? base.DEVT_BASE_URL : base.TEST_BASE_URL;

// test模块
const testApi = {
  getTest: BASE_URL + 'test/test1',
  postTest: BASE_URL + 'test/test2'
}

export {
  testApi
};