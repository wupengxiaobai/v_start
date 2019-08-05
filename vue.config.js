const path = require('path')
const resolve = (url) => path.join(__dirname, url)

module.exports = {
  chainWebpack: (config) => {
    // 代码压缩、分割
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('static', resolve('src/static'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  },
  assetsDir: 'assets', // 静态文件目录
  lintOnSave: false, // 是否开启 eslint提示
}