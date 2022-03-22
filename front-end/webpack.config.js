const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});
dotenv.config({ path: './.env' });
const dotEnvPlugin = new webpack.DefinePlugin({
	'process.env': JSON.stringify(process.env),
});
module.exports = (env) => {
	console.log('Goal: ', env); // 'local'
	return {
		mode: 'development',
		devServer: {
			historyApiFallback: true,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		plugins: [htmlPlugin, dotEnvPlugin],
	};
};
