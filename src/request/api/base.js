/**
 * 接口域名的管理
 */
const base = {
  // 测试接口
  TEST_BASE_URL: 'http://localhost:3005/',
  // 开发接口
  DEVT_BASE_URL: 'http://localhost:5000/'
}

// test模块
const testApi = {
  getTest: base.DEVT_BASE_URL + 'test/test1',
  postTest: base.DEVT_BASE_URL + 'test/test2'
}

export {
  testApi
};