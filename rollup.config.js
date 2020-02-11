
import p__rollup_plugin_auto_external from 'rollup-plugin-auto-external'
import p__rollup_plugin_babel from 'rollup-plugin-babel'
import p__rollup_plugin_commonjs from 'rollup-plugin-commonjs'
import p__rollup_plugin_node_resolve from 'rollup-plugin-node-resolve'
import p__rollup_plugin_terser from 'rollup-plugin-terser'
import p__rollup_plugin_visualizer from 'rollup-plugin-visualizer'


export default (object) => {
	return {
		input: [
			'source/inputs/index.js',
		],
		output: {
			dir: 'public',
		},
		plugins: [
			//p__rollup_plugin_auto_external(),
			p__rollup_plugin_babel(),
			p__rollup_plugin_commonjs(),
			p__rollup_plugin_node_resolve(),
			...object.produce ? [
				p__rollup_plugin_terser.terser(),
			] : [],
			p__rollup_plugin_visualizer(),
		],
	}
}
