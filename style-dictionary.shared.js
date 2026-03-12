import { fileHeader } from 'style-dictionary/utils';

const convertReferenceSyntaxToCssVars = (input) => String(input).replace(/\{([^}]+)\}/g, (_, referencePath) => `var(--${referencePath.replace(/\./g, '-')})`);

const mapTailwindName = (name) =>
	String(name)
		.replace(/^font-family-/, 'font-')
		.replace(/^font-size-/, 'text-')
		.replace(/^font-letter-spacing-/, 'tracking-');

const toTailwindVarLine = (name, value) => `\t--${name}: ${value};`;
const containerMatchPattern = /^sizing-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/;

export const registerTailwindThemeFormat = (StyleDictionary) => {
	StyleDictionary.registerFormat({
		name: 'tailwind/theme',
		format: async ({ dictionary, file }) => {
			const header = await fileHeader({ file });
			const lines = dictionary.allTokens
				.flatMap((token) => {
					const mappedName = mapTailwindName(token.name);
					const value = convertReferenceSyntaxToCssVars(token.original?.$value ?? token.value);
					const vars = [toTailwindVarLine(mappedName, value)];
					const containerMatch = token.name.match(containerMatchPattern);
					if (containerMatch) vars.push(toTailwindVarLine(`container-${containerMatch[1]}`, value));
					return vars;
				})
				.join('\n');
			return `${header}@theme inline {\n${lines}\n}\n`;
		}
	});
};
