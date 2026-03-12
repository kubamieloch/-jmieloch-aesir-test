export default {
	source: ['tokens/dark/**/*.json'],
	platforms: {
		packageCssDark: {
			transformGroup: 'css',
			buildPath: 'dist/tokens/css/',
			files: [
				{
					destination: 'tokens.dark.css',
					format: 'css/variables',
					options: {
						selector: '.dark',
						outputReferences: true
					}
				}
			]
		}
	}
};
