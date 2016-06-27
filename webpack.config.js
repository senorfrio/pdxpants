module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
}