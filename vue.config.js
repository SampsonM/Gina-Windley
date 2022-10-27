const CnameWebpackPlugin = require('cname-webpack-plugin')
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');


module.exports = {
	outputDir: 'docs',
	publicPath: '',
	configureWebpack: {
		plugins: [
			new CnameWebpackPlugin({
			  domain: 'www.gina-windley.co.uk',
			}),
			new PeerDepsExternalsPlugin()
		],
	},
	productionSourceMap: false,
};
