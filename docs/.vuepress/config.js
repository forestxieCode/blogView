const themeConfig = require('./config/theme/')

module.exports = {
  title: "Forest Xie",
  base: '/blogView/',   // 设置站点根路径
  description: '我追。一个成年人在一群尖叫的孩子中奔跑，但我不在乎。我追。风拂过我的脸庞，我唇上挂着一个像潘杰希尔峡谷那样大大的微笑。',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}