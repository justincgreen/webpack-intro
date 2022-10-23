const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development', // 'production' 2nd option 
	entry: {
		main: path.resolve(__dirname, 'src/app.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: '[name][ext]',
		clean: true
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 5001, // default 8080
		open: true,
		hot: true	
	},
	// loaders
	module: {
		rules: [
			// css
			{ test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			// images
			{ test: /\.(svg|ico|png|webp|jpg|gif)$/, type:'asset/resource' },
			// js for babel
			{ test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	
	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Demo',
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/temp.html')
		})
	]	
};