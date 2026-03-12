import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const files = [
	{
		path: 'dist/tokens/presets/vars.css',
		content: `/* Auto-generated preset. Do not edit directly. */
@import '../css/tokens.css';
@import '../css/tokens.dark.css';
`
	},
	{
		path: 'dist/tokens/presets/tailwind.css',
		content: `/* Auto-generated preset. Do not edit directly. */
@import './vars.css';
@import '../css/tailwind.css';
`
	}
];

await Promise.all(
	files.map(async ({ path, content }) => {
		const absolutePath = resolve(path);
		await mkdir(dirname(absolutePath), { recursive: true });
		await writeFile(absolutePath, content);
	})
);
