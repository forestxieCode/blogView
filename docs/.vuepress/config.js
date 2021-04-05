const themeConfig = require('./config/theme/')

module.exports = {
	title: 'Forest `Blog',
	base: '/blogView/', // 设置站点根路径
	description:
		'我追。一个成年人在一群尖叫的孩子中奔跑，但我不在乎。我追。风拂过我的脸庞，我唇上挂着一个像潘杰希尔峡谷那样大大的微笑。',
	dest: 'public',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
	],
	theme: 'reco',
	themeConfig,
	markdown: {
		lineNumbers: true,
	},
	plugins: [
		'@vuepress/medium-zoom',
		'flowchart',
		[
			'cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: ['circle'], // shape of the particle, default: 'star'， 可选'circle'
				zIndex: 999999999, // z-index property of the canvas, default: 999999999
			},
		],
		[
			'dynamic-title',
			{
				showIcon: '/favicon.ico',
				showText: '风筝回来拉!',
				hideIcon: '/failure.ico',
				hideText: '风筝飞走拉!',
				recoverTime: 2000,
			},
		],
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				// options选项中的所有参数，会传给Valine的配置
				options: {
					el: '#valine-vuepress-comment',
					appId: '58XgYzmwoqnkPvGrILWqIX4p-gzGzoHsz',
					appKey: 'C9EJ1J0XTgiBnLDDAmVtneaV',
				},
			},
		],
	],
}
