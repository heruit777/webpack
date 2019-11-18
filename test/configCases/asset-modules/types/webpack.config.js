module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(png|svg)$/,
				type: "asset",
				generator: {
					dataUrl: false
				}
			},
			{
				test: /\.jpg$/,
				type: "asset",
				generator: {
					dataUrl: false
				}
			}
		]
	},
	experiments: {
		asset: true
	}
};
