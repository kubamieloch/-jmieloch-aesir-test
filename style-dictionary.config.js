import StyleDictionary from 'style-dictionary';
import { registerTailwindThemeFormat } from './style-dictionary.shared.js';

registerTailwindThemeFormat(StyleDictionary);

export default {
	source: ['tokens/shared/**/*.json', 'tokens/light/**/*.json'],
	platforms: {
		packageCss: {
			transformGroup: 'css',
			buildPath: 'dist/tokens/css/',
			files: [
				{
					destination: 'tokens.css',
					format: 'css/variables',
					options: {
						selector: ':root',
						outputReferences: true
					}
				}
			]
		},
		packageTailwind: {
			transformGroup: 'css',
			buildPath: 'dist/tokens/css/',
			files: [
				{
					destination: 'tailwind.css',
					format: 'tailwind/theme',
					options: {
						outputReferences: true
					}
				}
			]
		}
	}
};
