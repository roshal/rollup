
const m__alias = require('./alias')


module.exports.plugins = [
	[
		'babel-plugin-module-resolver',
		{
			alias: m__alias,
		},
	],
]

module.exports.presets = [
	'@babel/preset-flow',
]
