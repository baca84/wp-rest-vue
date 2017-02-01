var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './build',
		filename: 'app.bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.js$/,
				include: [path.resolve(__dirname, './src')],
				loader: 'babel'
			}, {
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url?prefix=img/&limit=5000'
			},

			{
				test: /\.scss$/,
				loader: 'style!css!sass?sourceMap'
			}, {
				test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file'
			},

			{
				test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
			}
		],
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			// vuex: 'vuex/dist/vuex.js',
			// vueRouter: 'vue-router/dist/vue-router.js'
		}
	},
	devServer: {
		host: "doc.local",
		port: 8080,
		https: false
	},
	postcss: function() {
		return [autoprefixer({browsers: ['last 3 version']})];
	},
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
			VERSION: JSON.stringify("1.0"),
			"typeof window": JSON.stringify("object")
		})
  ]
};
