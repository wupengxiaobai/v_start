module.exports = {
  presets: ["@vue/app"],
  // 配置vant
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};